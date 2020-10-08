class SignInUserUseCase {
  constructor({ userRepository, timerServiceFacade }) {
    this.userRepository = userRepository
    this.timerServiceFacade = timerServiceFacade
  }

  async execute({ idToken, userId, email, name }) {
    const user = await this.userRepository.getUserById(userId)

    await this.timerServiceFacade.subscribe(idToken)

    if (user) {
      return user
    }

    return await this.userRepository.createUser({
      id: userId,
      email: email,
      name: name,
    })
  }
}

export default SignInUserUseCase
