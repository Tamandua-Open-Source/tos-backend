class GetAllLevelsUseCase {
  constructor({ gameRepository }) {
    this.gameRepository = gameRepository
  }

  async execute() {
    return await this.gameRepository.getAllLevels()
  }
}

export default GetAllLevelsUseCase
