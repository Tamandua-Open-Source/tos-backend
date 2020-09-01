class PatchUserPreferenceCycleDurationUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, workDuration, breakDuration) {
    return await this.userRepository.patchUserPreferenceCycleDuration(
      userId,
      workDuration,
      breakDuration
    )
  }
}

export default PatchUserPreferenceCycleDurationUseCase
