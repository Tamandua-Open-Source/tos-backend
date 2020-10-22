class GetAllStretchChallengesUseCase {
  constructor({ stretchSessionRepository }) {
    this.stretchSessionRepository = stretchSessionRepository
  }

  async execute() {
    return await this.stretchSessionRepository.getAllStretchChallenges()
  }
}

export default GetAllStretchChallengesUseCase
