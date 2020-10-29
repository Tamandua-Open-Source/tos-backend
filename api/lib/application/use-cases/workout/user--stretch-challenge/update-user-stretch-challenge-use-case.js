class UpdateUserStretchChallengeUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId, stretchChallengeId, updatedFields) {
    return await this.workoutRepository.updateUserStretchChallenge(
      userId,
      stretchChallengeId,
      updatedFields
    )
  }
}

export default UpdateUserStretchChallengeUseCase
