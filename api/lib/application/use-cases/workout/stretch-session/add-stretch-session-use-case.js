class AddStretchSessionUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute({ name, description, duration, imageFileUrl }) {
    const stretchSession = {
      name,
      description,
      duration,
      imageFileUrl,
    }

    return await this.workoutRepository.createStretchSession(stretchSession)
  }
}

export default AddStretchSessionUseCase
