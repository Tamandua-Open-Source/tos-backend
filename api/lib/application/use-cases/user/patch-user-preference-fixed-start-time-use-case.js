class PatchUserPreferenceFixedTimeUseCase {
  constructor({ userRepository, timerServiceFacade }) {
    this.userRepository = userRepository
    this.timerServiceFacade = timerServiceFacade
  }

  async execute({ idToken, userId, startTime }) {
    await this.userRepository.patchUserPreferenceFixedStartTime(
      userId,
      startTime
    )

    const preferences = await this.userRepository.getUserPreferences(userId)

    await this.timerServiceFacade.patchStartTime({
      idToken: idToken,
      startTime: preferences.startTime,
    })

    return preferences
  }
}

export default PatchUserPreferenceFixedTimeUseCase
