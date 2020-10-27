class AddStretchChallengeUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute({ name, description }) {
    const stretchChallenge = {
      name,
      description,
    }

    return await this.workoutRepository.createStretchChallenge(stretchChallenge)
  }
}

export default AddStretchChallengeUseCase
