class AddStretchChallengeStretchSessionUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchChallengeId, stretchSessionId) {
    return await this.workoutRepository.addStretchChallengeStretchSession(
      stretchChallengeId,
      stretchSessionId
    )
  }
}

export default AddStretchChallengeStretchSessionUseCase
