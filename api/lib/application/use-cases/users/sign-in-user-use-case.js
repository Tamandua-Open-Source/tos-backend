class SignInUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute({ userId, email, name }) {
    const user = await this.userRepository.getUserById(userId)

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
