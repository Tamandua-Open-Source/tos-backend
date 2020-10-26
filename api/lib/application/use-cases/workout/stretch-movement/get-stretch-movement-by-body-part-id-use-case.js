class GetStretchMovementByBodyPartIdUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(bodyPartId) {
    return await this.workoutRepository.getStretchMovementByBodyPartId(
      bodyPartId
    )
  }
}

export default GetStretchMovementByBodyPartIdUseCase
