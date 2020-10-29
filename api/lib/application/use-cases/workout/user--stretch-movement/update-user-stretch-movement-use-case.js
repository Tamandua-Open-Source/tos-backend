class UpdateUserStretchMovementUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId, stretchMovementId, updatedFields) {
    return await this.workoutRepository.updateUserStretchMovement(
      userId,
      stretchMovementId,
      updatedFields
    )
  }
}

export default UpdateUserStretchMovementUseCase
