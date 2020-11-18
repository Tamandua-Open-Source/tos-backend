class GetStretchSessionsByUserIdUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(userId) {
    return await this.workoutRepository.getStretchSessionsByUserId(userId)
  }
}

export default GetStretchSessionsByUserIdUseCase
