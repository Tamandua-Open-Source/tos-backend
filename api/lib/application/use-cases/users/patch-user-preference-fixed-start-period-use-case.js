class PatchUserPreferenceFixedStartPeriodUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, startPeriodId) {
    await this.userRepository.patchUserPreferenceFixedStartPeriod(
      userId,
      startPeriodId
    )

    return await this.userRepository.getUserPreferences(userId)
  }
}

export default PatchUserPreferenceFixedStartPeriodUseCase
