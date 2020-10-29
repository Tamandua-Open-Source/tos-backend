class GetStretchMovementsByUserIdUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId) {
    const stretchMovements = await this.workoutRepository.getStretchMovementsByUserId(
      userId
    )

    const relations = await this.workoutRepository.getUserStretchMovementsByUserId(
      userId
    )

    return {
      stretchMovements,
      relations,
    }
  }
}

export default GetStretchMovementsByUserIdUseCase
