class DeleteUserUseCase {
  constructor({ userRepository, timerServiceFacade }) {
    this.userRepository = userRepository
    this.timerServiceFacade = timerServiceFacade
  }

  async execute({ idToken, userId }) {
    const user = await this.userRepository.deleteUser(userId)

    await this.timerServiceFacade.unsubscribe(idToken)

    return user
  }
}

export default DeleteUserUseCase
