class PatchUserPreferenceGoalsUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, updatedFields) {
    return await this.userRepository.patchUserPreferenceGoal(
      userId,
      updatedFields
    )
  }
}

export default PatchUserPreferenceGoalsUseCase
