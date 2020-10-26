class GetStretchSessionByIdUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchSessionId) {
    return await this.workoutRepository.getStretchSessionById(stretchSessionId)
  }
}

export default GetStretchSessionByIdUseCase
