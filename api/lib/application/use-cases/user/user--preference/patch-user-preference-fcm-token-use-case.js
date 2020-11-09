class PatchUserPreferenceFcmTokenUseCase {
  constructor({ userRepository, timerServiceFacade }) {
    this.userRepository = userRepository
    this.timerServiceFacade = timerServiceFacade
  }

  async execute({ idToken, userId, fcmToken }) {
    await this.userRepository.patchUserPreferenceFcmToken(userId, fcmToken)

    const preferences = await this.userRepository.getUserPreferences(userId)

    await this.timerServiceFacade.patchFcmToken({
      idToken: idToken,
      fcmToken: preferences.fcmToken,
    })

    return preferences
  }
}

export default PatchUserPreferenceFcmTokenUseCase
