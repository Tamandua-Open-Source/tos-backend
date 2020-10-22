import { response } from 'express'

class GetStretchChallengesByUserIdUseCase {
  constructor({ stretchSessionRepository }) {
    this.stretchSessionRepository = stretchSessionRepository
  }

  async execute(userId) {
    const stretchChallenges = await this.stretchSessionRepository.getStretchChallengesByUserId(
      userId
    )

    const relations = await this.stretchSessionRepository.getUserStretchChallengesByUserId(
      userId
    )

    return {
      stretchChallenges,
      relations,
    }
  }
}

export default GetStretchChallengesByUserIdUseCase
