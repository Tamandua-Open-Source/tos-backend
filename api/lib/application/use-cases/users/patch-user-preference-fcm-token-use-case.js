class PatchUserPreferenceFcmTokenUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, fcmToken) {
    await this.userRepository.patchUserPreferenceFcmToken(userId, fcmToken)

    return await this.userRepository.getUserPreferences(userId)
  }
}

export default PatchUserPreferenceFcmTokenUseCase
