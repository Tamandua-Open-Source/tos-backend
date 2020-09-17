class GetUserPreferencesUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId) {
    const preferences = await this.userRepository.getUserPreferences(userId)
    if (!preferences) {
      return await this.userRepository.createUserPreferences(userId)
    }
    return preferences
  }
}

export default GetUserPreferencesUseCase
