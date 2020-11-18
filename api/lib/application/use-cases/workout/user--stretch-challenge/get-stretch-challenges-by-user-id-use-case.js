class GetStretchChallengesByUserIdUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId) {
    return await this.workoutRepository.getStretchChallengesByUserId(userId)
  }
}

export default GetStretchChallengesByUserIdUseCase
