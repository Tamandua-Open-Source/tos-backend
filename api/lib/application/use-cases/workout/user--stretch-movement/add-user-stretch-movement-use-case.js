class AddUserStretchMovementUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId, stretchMovementId) {
    return await this.workoutRepository.addUserStretchMovement(
      userId,
      stretchMovementId
    )
  }
}

export default AddUserStretchMovementUseCase
