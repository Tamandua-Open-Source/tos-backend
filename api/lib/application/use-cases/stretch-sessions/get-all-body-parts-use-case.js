class GetAllBodyPartsUseCase {
  constructor({ stretchSessionRepository }) {
    this.stretchSessionRepository = stretchSessionRepository
  }

  async execute() {
    return await this.stretchSessionRepository.getAllBodyParts()
  }
}

export default GetAllBodyPartsUseCase
