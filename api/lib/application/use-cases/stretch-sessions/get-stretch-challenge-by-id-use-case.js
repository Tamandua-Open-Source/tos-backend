class GetStretchChallengeByIdUseCase {
  constructor({ stretchSessionRepository }) {
    this.stretchSessionRepository = stretchSessionRepository
  }

  async execute(stretchChallengeId) {
    return await this.stretchSessionRepository.getStretchChallengeById(
      stretchChallengeId
    )
  }
}

export default GetStretchChallengeByIdUseCase
