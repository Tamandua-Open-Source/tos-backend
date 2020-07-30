class SignInUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute({ userId, email, name }) {
    const user = this.userRepository.getUserById(userId)
    if (!user) {
      const newUser = new User({ id: userId, email, name })
      return await this.userRepository.createUser(newUser)
    }
    return user
  }
}

export default SignInUserUseCase
