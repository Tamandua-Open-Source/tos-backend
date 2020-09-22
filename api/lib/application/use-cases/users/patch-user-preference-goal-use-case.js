class PatchUserPreferenceGoalsUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, updatedFields) {
    await this.userRepository.patchUserPreferenceGoal(userId, updatedFields)

    return await this.userRepository.getUserPreferences(userId)
  }
}

export default PatchUserPreferenceGoalsUseCase
