class GetRecommendedStretchMovementsUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId) {
    return await this.workoutRepository.getRecommendedStretchMovementsByUserId(
      userId
    )
  }
}

export default GetRecommendedStretchMovementsUseCase
