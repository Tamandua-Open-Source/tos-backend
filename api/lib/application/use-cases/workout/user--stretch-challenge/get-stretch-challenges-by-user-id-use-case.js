class GetStretchChallengesByUserIdUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId) {
    const stretchChallenges = await this.workoutRepository.getStretchChallengesByUserId(
      userId
    )

    const relations = await this.workoutRepository.getUserStretchChallengesByUserId(
      userId
    )

    return {
      stretchChallenges,
      relations,
    }
  }
}

export default GetStretchChallengesByUserIdUseCase
