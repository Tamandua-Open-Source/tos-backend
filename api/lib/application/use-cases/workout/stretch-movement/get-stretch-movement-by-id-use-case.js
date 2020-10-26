class GetStretchMovementByIdUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchMovementId) {
    return await this.workoutRepository.getStretchMovementById(
      stretchMovementId
    )
  }
}

export default GetStretchMovementByIdUseCase
