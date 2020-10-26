class UpdateUserStretchChallengeUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId, stretchChallengeId, progress) {
    return await this.workoutRepository.updateUserStretchChallenge(
      userId,
      stretchChallengeId,
      progress
    )
  }
}

export default UpdateUserStretchChallengeUseCase
