class UpdateStretchMovementUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchMovementId, updatedFields) {
    return await this.workoutRepository.updateStretchMovement(
      stretchMovementId,
      updatedFields
    )
  }
}

export default UpdateStretchMovementUseCase
