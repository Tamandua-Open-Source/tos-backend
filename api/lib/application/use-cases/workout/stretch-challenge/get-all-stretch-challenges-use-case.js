class GetAllStretchChallengesUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute() {
    return await this.workoutRepository.getAllStretchChallenges()
  }
}

export default GetAllStretchChallengesUseCase
