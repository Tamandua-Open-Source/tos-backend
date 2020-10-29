class GetAllStretchSessionsUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute() {
    return await this.workoutRepository.getAllStretchSessions()
  }
}

export default GetAllStretchSessionsUseCase
