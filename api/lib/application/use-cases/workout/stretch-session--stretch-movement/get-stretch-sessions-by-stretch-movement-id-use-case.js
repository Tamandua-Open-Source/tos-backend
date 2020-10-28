class GetStretchSessionsByStretchMovementIdUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchMovementId) {
    return await this.workoutRepository.getStretchSessionsByStretchMovementId(
      stretchMovementId
    )
  }
}

export default GetStretchSessionsByStretchMovementIdUseCase
