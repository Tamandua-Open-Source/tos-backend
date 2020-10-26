class DeleteBodyPartUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(bodyPartId) {
    return await this.workoutRepository.deleteBodyPart(bodyPartId)
  }
}

export default DeleteBodyPartUseCase
