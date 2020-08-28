class DeleteUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId) {
    await this.userRepository.deleteUserPreferences(userId)
    return await this.userRepository.deleteUser(userId)
  }
}

export default DeleteUserUseCase
