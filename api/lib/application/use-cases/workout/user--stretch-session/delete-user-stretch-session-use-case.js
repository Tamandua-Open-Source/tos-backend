class DeleteUserStretchSessionUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId, stretchSessionId) {
    return await this.workoutRepository.deleteUserStretchSession(
      userId,
      stretchSessionId
    )
  }
}

export default DeleteUserStretchSessionUseCase
