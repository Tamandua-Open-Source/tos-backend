class DeleteStretchSessionStretchMovementUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchSessionId, stretchMovementId) {
    return await this.workoutRepository.deleteStretchSessionStretchMovement(
      stretchSessionId,
      stretchMovementId
    )
  }
}

export default DeleteStretchSessionStretchMovementUseCase
