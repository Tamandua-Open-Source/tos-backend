class GetStretchSessionsByUserIdUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId) {
    const stretchSessions = await this.workoutRepository.getStretchSessionsByUserId(
      userId
    )

    const relations = await this.workoutRepository.getUserStretchSessionsByUserId(
      userId
    )

    return {
      stretchSessions,
      relations,
    }
  }
}

export default GetStretchSessionsByUserIdUseCase
