class PatchUserPreferenceWeeklyWorkActivityUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, updatedFields) {
    await this.userRepository.patchUserPreferenceWeeklyWorkActivity(
      userId,
      updatedFields
    )

    return await this.userRepository.getUserPreferences(userId)
  }
}

export default PatchUserPreferenceWeeklyWorkActivityUseCase
