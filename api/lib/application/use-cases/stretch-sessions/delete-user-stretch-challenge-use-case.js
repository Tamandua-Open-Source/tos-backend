class DeleteUserStretchChallengeUseCase {
  constructor({ stretchSessionRepository }) {
    this.stretchSessionRepository = stretchSessionRepository
  }

  async execute(userId, stretchChallengeId) {
    return await this.stretchSessionRepository.deleteUserStretchChallenge(
      userId,
      stretchChallengeId
    )
  }
}

export default DeleteUserStretchChallengeUseCase
