class GetStretchSessionByIdUseCase {
  constructor({ stretchSessionRepository }) {
    this.stretchSessionRepository = stretchSessionRepository
  }

  async execute(stretchSessionId) {
    return await this.stretchSessionRepository.getStretchSessionById(
      stretchSessionId
    )
  }
}

export default GetStretchSessionByIdUseCase
