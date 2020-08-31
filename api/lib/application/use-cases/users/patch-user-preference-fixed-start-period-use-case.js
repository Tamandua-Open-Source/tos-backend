class PatchUserPreferenceFixedStartPeriodUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, startPeriodId) {
    return await this.userRepository.patchUserPreferenceFixedStartPeriod(
      userId,
      startPeriodId
    )
  }
}

export default PatchUserPreferenceFixedStartPeriodUseCase
