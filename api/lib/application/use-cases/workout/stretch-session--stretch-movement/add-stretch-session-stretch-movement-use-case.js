class AddStretchSessionStretchMovementUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchSessionId, stretchMovementId) {
    return await this.workoutRepository.addStretchSessionStretchMovement(
      stretchSessionId,
      stretchMovementId
    )
  }
}

export default AddStretchSessionStretchMovementUseCase
