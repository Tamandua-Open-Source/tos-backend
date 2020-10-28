class GetStretchChallengesByStretchSessionIdUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchSessionId) {
    return await this.workoutRepository.getStretchChallengesByStretchSessionId(
      stretchSessionId
    )
  }
}

export default GetStretchChallengesByStretchSessionIdUseCase
