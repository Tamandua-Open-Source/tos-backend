class PatchUserPreferenceFixedStartPeriodUseCase {
  constructor({ userRepository, timerServiceFacade }) {
    this.userRepository = userRepository
    this.timerServiceFacade = timerServiceFacade
  }

  async execute({ idToken, userId, startPeriodId }) {
    await this.userRepository.patchUserPreferenceFixedStartPeriod(
      userId,
      startPeriodId
    )

    const preferences = await this.userRepository.getUserPreferences(userId)

    await this.timerServiceFacade.patchStartTime({
      idToken: idToken,
      startTime: preferences.UserPreferenceStartPeriod.startsAt,
    })

    return preferences
  }
}

export default PatchUserPreferenceFixedStartPeriodUseCase
