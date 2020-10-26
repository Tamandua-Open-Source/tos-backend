class GetAllBodyPartsUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute() {
    return await this.workoutRepository.getAllBodyParts()
  }
}

export default GetAllBodyPartsUseCase
