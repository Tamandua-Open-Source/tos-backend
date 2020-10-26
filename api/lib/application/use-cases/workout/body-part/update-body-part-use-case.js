class UpdateBodyPartUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(bodyPartId, updatedFields) {
    return await this.workoutRepository.updateBodyPart(
      bodyPartId,
      updatedFields
    )
  }
}

export default UpdateBodyPartUseCase
