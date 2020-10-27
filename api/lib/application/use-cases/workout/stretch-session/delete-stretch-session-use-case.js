class DeleteStretchSessionUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchSessionId) {
    return await this.workoutRepository.deleteStretchSession(stretchSessionId)
  }
}

export default DeleteStretchSessionUseCase
