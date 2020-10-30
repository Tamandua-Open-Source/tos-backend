class WipeAllRegisteredUsersUseCase {
  constructor({ firebaseAdminFacade, userRepository, timerServiceFacade }) {
    this.firebaseAdminFacade = firebaseAdminFacade
    this.userRepository = userRepository
    this.timerServiceFacade = timerServiceFacade
  }

  async execute() {
    const usersData = await this.firebaseAdminFacade.listAllUsers()

    //get user information
    const users = usersData.map((user) => {
      return {
        id: user.uid,
        name:
          user.displayName ??
          (user.providerData[0]
            ? user.providerData[0].displayName
            : undefined) ??
          (user.providerData[1]
            ? user.providerData[1].displayName
            : undefined) ??
          'Flexibe User',
        email:
          user.email ??
          (user.providerData[0] ? user.providerData[0].email : undefined) ??
          (user.providerData[1] ? user.providerData[1].email : undefined),
      }
    })

    //delete users without email
    const usersToDelete = users.filter((user) => {
      return !user.email
    })
    await usersToDelete.forEach(async (user) => {
      await this.firebaseAdminFacade.deleteUserById(user.id)
      await this.timerServiceFacade.unsubscribeByUserId(user.id)
    })

    //register users with email
    const usersToRegister = users.filter((user) => {
      return user.email
    })

    await usersToRegister.forEach(async (user) => {
      const registeredUser = await this.userRepository.getUserById(user.id)

      await this.timerServiceFacade.subscribeByUserId(user.id)

      if (registeredUser) return

      await this.userRepository.createUser({
        id: user.id,
        email: user.email,
        name: user.name,
      })
    })

    return true
  }
}

export default WipeAllRegisteredUsersUseCase
