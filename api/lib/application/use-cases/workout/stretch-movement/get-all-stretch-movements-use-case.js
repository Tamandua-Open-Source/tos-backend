class GetAllStretchMovementsUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute() {
    return await this.workoutRepository.getAllStretchMovements()
  }
}

export default GetAllStretchMovementsUseCase
