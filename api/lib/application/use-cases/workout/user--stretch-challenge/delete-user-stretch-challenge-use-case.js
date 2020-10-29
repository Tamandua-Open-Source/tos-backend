class DeleteUserStretchChallengeUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId, stretchChallengeId) {
    return await this.workoutRepository.deleteUserStretchChallenge(
      userId,
      stretchChallengeId
    )
  }
}

export default DeleteUserStretchChallengeUseCase
