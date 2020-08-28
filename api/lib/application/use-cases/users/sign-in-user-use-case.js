class SignInUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute({ userId, email, name }) {
    const user = await this.userRepository.getUserById(userId)
    console.log(user)
    if (!user) {
      return await this.userRepository.createUser({
        id: userId,
        email: email,
        name: name,
      })
    }
    return user
  }
}

export default SignInUserUseCase
