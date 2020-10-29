class DeleteUserStretchMovementUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId, stretchMovementId) {
    return await this.workoutRepository.deleteUserStretchMovement(
      userId,
      stretchMovementId
    )
  }
}

export default DeleteUserStretchMovementUseCase
