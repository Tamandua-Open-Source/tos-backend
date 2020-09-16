class PatchUserFcmTokenUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, fcmToken) {
    const preferences = await this.userRepository.getUserPreferences(userId)
    if (!preferences) {
      await this.userRepository.createUserPreferences(userId)
    }

    return await this.userRepository.patchUserFcmToken(userId, fcmToken)
  }
}

export default PatchUserFcmTokenUseCase
