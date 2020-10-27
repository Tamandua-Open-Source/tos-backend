class UpdateStretchSessionUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchSessionId, updatedFields) {
    return await this.workoutRepository.updateStretchSession(
      stretchSessionId,
      updatedFields
    )
  }
}

export default UpdateStretchSessionUseCase
