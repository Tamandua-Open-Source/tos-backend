class GetStretchMovementsByUserIdUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId) {
    return await this.workoutRepository.getStretchMovementsByUserId(userId)
  }
}

export default GetStretchMovementsByUserIdUseCase
