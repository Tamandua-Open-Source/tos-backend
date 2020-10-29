class DeleteStretchMovementUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchMovementId) {
    return await this.workoutRepository.deleteStretchMovement(stretchMovementId)
  }
}

export default DeleteStretchMovementUseCase
