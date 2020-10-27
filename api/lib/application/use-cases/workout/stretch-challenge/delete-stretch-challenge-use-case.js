class DeleteStretchChallengeUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchChallengeId) {
    return await this.workoutRepository.deleteStretchChallenge(
      stretchChallengeId
    )
  }
}

export default DeleteStretchChallengeUseCase
