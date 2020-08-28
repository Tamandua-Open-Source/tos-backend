class PatchUserPreferenceWeeklyStretchActivityUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, updatedFields) {
    const preferences = await this.userRepository.getUserPreferences(userId)
    if (!preferences) {
      await this.userRepository.createUserPreferences(userId)
    }

    return await this.userRepository.patchUserPreferenceWeeklyStretchActivity(
      userId,
      updatedFields
    )
  }
}

export default PatchUserPreferenceWeeklyStretchActivityUseCase
