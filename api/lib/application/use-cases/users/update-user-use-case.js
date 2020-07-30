class UpdateUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, updatedFields) {
    return await this.userRepository.updateUser(userId, updatedFields)
  }
}

export default UpdateUserUseCase
