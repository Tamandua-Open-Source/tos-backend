class DeleteUserUseCase {
  constructor({ userRepository, timerServiceFacade }) {
    this.userRepository = userRepository
    this.timerServiceFacade = timerServiceFacade
  }

  async execute({ idToken, userId }) {
    const user = await this.userRepository.deleteUser(userId)
    console.log(idToken)

    await this.timerServiceFacade.unsubscribe(idToken)

    return user
  }
}

export default DeleteUserUseCase
