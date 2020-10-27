class AddStretchMovementBodyPartUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchMovementId, bodyPartId) {
    return await this.workoutRepository.addSretchMovementBodyPart(
      stretchMovementId,
      bodyPartId
    )
  }
}

export default AddStretchMovementBodyPartUseCase
