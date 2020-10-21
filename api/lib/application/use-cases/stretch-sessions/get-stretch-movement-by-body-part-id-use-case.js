class GetStretchMovementByBodyPartIdUseCase {
  constructor({ stretchSessionRepository }) {
    this.stretchSessionRepository = stretchSessionRepository
  }

  async execute(bodyPartId) {
    return await this.stretchSessionRepository.getStretchMovementByBodyPartId(
      bodyPartId
    )
  }
}

export default GetStretchMovementByBodyPartIdUseCase
