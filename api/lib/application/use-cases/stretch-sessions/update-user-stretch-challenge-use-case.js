class UpdateUserStretchChallengeUseCase {
  constructor({ stretchSessionRepository }) {
    this.stretchSessionRepository = stretchSessionRepository
  }

  async execute(userId, stretchChallengeId, progress) {
    return await this.stretchSessionRepository.updateUserStretchChallenge(
      userId,
      stretchChallengeId,
      progress
    )
  }
}

export default UpdateUserStretchChallengeUseCase
