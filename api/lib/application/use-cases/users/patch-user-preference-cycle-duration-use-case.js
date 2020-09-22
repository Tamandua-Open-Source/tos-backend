class PatchUserPreferenceCycleDurationUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, workDuration, breakDuration) {
    await this.userRepository.patchUserPreferenceCycleDuration(
      userId,
      workDuration,
      breakDuration
    )

    return await this.userRepository.getUserPreferences(userId)
  }
}

export default PatchUserPreferenceCycleDurationUseCase
