class PatchUserPreferenceWeeklyStretchActivityUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, updatedFields) {
    await this.userRepository.patchUserPreferenceWeeklyStretchActivity(
      userId,
      updatedFields
    )

    return await this.userRepository.getUserPreferences(userId)
  }
}

export default PatchUserPreferenceWeeklyStretchActivityUseCase
