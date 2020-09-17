class PatchUserPreferenceWeeklyStretchActivityUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, updatedFields) {
    return await this.userRepository.patchUserPreferenceWeeklyStretchActivity(
      userId,
      updatedFields
    )
  }
}

export default PatchUserPreferenceWeeklyStretchActivityUseCase
