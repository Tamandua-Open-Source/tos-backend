class GetUserPreferencesUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId) {
    return await this.userRepository.getUserPreferences(userId)
  }
}

export default GetUserPreferencesUseCase
