class PatchUserPreferenceFixedTimeUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, startTime) {
    return await this.userRepository.patchUserPreferenceFixedStartTime(
      userId,
      startTime
    )
  }
}

export default PatchUserPreferenceFixedTimeUseCase
