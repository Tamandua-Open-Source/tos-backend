class PatchUserFcmTokenUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(userId, fcmToken) {
    return await this.userRepository.patchUserFcmToken(userId, fcmToken)
  }
}

export default PatchUserFcmTokenUseCase
