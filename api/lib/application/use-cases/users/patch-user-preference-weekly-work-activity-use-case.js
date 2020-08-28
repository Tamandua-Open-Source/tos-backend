class PatchUserPreferenceWeeklyWorkActivityUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, updatedFields) {
    const preferences = await this.userRepository.getUserPreferences(userId)
    if (!preferences) {
      await this.userRepository.createUserPreferences(userId)
    }

    return await this.userRepository.patchUserPreferenceWeeklyWorkActivity(
      userId,
      updatedFields
    )
  }
}

export default PatchUserPreferenceWeeklyWorkActivityUseCase
