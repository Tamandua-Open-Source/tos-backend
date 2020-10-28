class GetStretchMovementsByBodyPartIdUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(bodyPartId) {
    return await this.workoutRepository.getStretchMovementsByBodyPartId(
      bodyPartId
    )
  }
}

export default GetStretchMovementsByBodyPartIdUseCase
