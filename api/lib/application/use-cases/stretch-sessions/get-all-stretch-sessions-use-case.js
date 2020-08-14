class GetAllStretchSessionsUseCase {
  constructor({ stretchSessionRepository }) {
    this.stretchSessionRepository = stretchSessionRepository
  }

  async execute() {
    return await this.stretchSessionRepository.getAllStretchSessions()
  }
}

export default GetAllStretchSessionsUseCase
