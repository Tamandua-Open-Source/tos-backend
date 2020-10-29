class UpdateUserStretchSessionUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId, stretchSessionId, updatedFields) {
    return await this.workoutRepository.updateUserStretchSession(
      userId,
      stretchSessionId,
      updatedFields
    )
  }
}

export default UpdateUserStretchSessionUseCase
