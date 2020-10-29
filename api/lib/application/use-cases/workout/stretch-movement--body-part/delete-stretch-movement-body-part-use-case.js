class DeleteStretchMovementBodyPartUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchMovementId, bodyPartId) {
    return await this.workoutRepository.deleteStretchMovementBodyPart(
      stretchMovementId,
      bodyPartId
    )
  }
}

export default DeleteStretchMovementBodyPartUseCase
