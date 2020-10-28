class DeleteStretchChallengeStretchSessionUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchChallengeId, stretchSessionId) {
    return await this.workoutRepository.deleteStretchChallengeStretchSession(
      stretchChallengeId,
      stretchSessionId
    )
  }
}

export default DeleteStretchChallengeStretchSessionUseCase
