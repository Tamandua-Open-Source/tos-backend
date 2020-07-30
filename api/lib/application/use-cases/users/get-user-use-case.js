class GetUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId) {
    return await this.userRepository.getUserById(userId)
  }
}

export default GetUserUseCase
