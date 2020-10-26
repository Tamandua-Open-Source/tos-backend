class GetStretchChallengeByIdUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(stretchChallengeId) {
    return await this.workoutRepository.getStretchChallengeById(
      stretchChallengeId
    )
  }
}

export default GetStretchChallengeByIdUseCase
