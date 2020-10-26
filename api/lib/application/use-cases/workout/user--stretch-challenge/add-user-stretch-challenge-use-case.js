class AddUserStretchChallengeUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId, stretchChallengeId) {
    return await this.workoutRepository.addUserStretchChallenge(
      userId,
      stretchChallengeId
    )
  }
}

export default AddUserStretchChallengeUseCase
