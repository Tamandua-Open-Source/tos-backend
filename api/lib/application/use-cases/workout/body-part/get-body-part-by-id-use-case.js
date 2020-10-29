class GetBodyPartByIdUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(bodyPartId) {
    return await this.workoutRepository.getBodyPartById(bodyPartId)
  }
}

export default GetBodyPartByIdUseCase
