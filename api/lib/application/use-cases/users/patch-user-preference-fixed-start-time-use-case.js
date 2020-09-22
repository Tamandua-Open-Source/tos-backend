class PatchUserPreferenceFixedTimeUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, startTime) {
    await this.userRepository.patchUserPreferenceFixedStartTime(
      userId,
      startTime
    )

    return await this.userRepository.getUserPreferences(userId)
  }
}

export default PatchUserPreferenceFixedTimeUseCase
