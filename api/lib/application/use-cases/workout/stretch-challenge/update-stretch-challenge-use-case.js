class UpdateStretchChallengeUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchChallengeId, updatedFields) {
    return await this.workoutRepository.updateStretchChallenge(
      stretchChallengeId,
      updatedFields
    )
  }
}

export default UpdateStretchChallengeUseCase
