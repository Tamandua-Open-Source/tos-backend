class PatchUserPreferenceFcmTokenUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, fcmToken) {
    return await this.userRepository.patchUserPreferenceFcmToken(
      userId,
      fcmToken
    )
  }
}

export default PatchUserPreferenceFcmTokenUseCase
