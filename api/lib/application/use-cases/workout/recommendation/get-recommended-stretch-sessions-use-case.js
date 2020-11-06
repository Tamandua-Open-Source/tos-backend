class GetRecommendedStretchSessionsUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId) {
    return await this.workoutRepository.getRecommendedStretchSessionsByUserId(
      userId
    )
  }
}

export default GetRecommendedStretchSessionsUseCase
