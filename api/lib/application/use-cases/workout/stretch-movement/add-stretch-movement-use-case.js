class AddStretchMovementUseCase {
  constructor({ workoutRepository }) {
    this.workoutRepository = workoutRepository
  }

  async execute({ name, description, duration, imageFileUrl, videoFileUrl }) {
    const stretchMovement = {
      name,
      description,
      duration,
      imageFileUrl,
      videoFileUrl,
    }

    return await this.workoutRepository.createStretchMovement(stretchMovement)
  }
}

export default AddStretchMovementUseCase
