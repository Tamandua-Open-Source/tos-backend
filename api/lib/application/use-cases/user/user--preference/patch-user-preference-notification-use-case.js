class PatchUserPreferenceNotificationUseCase {
  constructor({ userRepository, timerServiceFacade }) {
    this.userRepository = userRepository
    this.timerServiceFacade = timerServiceFacade
  }

  async execute({
    idToken,
    userId,
    allowTimerNotifications,
    allowWorkoutNotifications,
    allowGeneralNotifications,
  }) {
    await this.userRepository.patchUserPreferenceNotification({
      userId,
      allowTimerNotifications,
      allowWorkoutNotifications,
      allowGeneralNotifications,
    })

    const preferences = await this.userRepository.getUserPreferences(userId)

    if (typeof allowTimerNotifications === 'boolean') {
      await this.timerServiceFacade.patchNotification({
        idToken,
        allowTimerNotifications,
      })
    }

    return preferences
  }
}

export default PatchUserPreferenceNotificationUseCase
