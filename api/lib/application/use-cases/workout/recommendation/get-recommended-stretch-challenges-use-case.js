class GetRecommendedStretchChallengesUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId) {
    return await this.workoutRepository.getRecommendedStretchChallengesByUserId(
      userId
    )
  }
}

export default GetRecommendedStretchChallengesUseCase
