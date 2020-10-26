class AddBodyPartUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute(name) {
    const bodyPart = {
      name,
    }

    return await this.workoutRepository.createBodyPart(bodyPart)
  }
}

export default AddBodyPartUseCase
