class GetAllAchievementsUseCase {
  constructor({ gameRepository }) {
    this.gameRepository = gameRepository
  }

  async execute() {
    return await this.gameRepository.getAllAchievements()
  }
}

export default GetAllAchievementsUseCase
