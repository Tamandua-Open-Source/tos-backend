class AddUserStretchSessionUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId, stretchSessionId) {
    return await this.workoutRepository.addUserStretchSession(
      userId,
      stretchSessionId
    )
  }
}

export default AddUserStretchSessionUseCase
