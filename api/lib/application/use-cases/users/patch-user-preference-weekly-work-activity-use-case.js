class PatchUserPreferenceWeeklyWorkActivityUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, updatedFields) {
    return await this.userRepository.patchUserPreferenceWeeklyWorkActivity(
      userId,
      updatedFields
    )
  }
}

export default PatchUserPreferenceWeeklyWorkActivityUseCase
