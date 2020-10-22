class AddUserStretchChallengeUseCase {
  constructor({ stretchSessionRepository }) {
    this.stretchSessionRepository = stretchSessionRepository
  }

  async execute(userId, stretchChallengeId) {
    return await this.stretchSessionRepository.addUserStretchChallenge(
      userId,
      stretchChallengeId
    )
  }
}

export default AddUserStretchChallengeUseCase
