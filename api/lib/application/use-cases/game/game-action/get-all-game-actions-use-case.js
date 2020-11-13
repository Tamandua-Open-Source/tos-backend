class GetAllGameActionsUseCase {
  constructor({ gameRepository }) {
    this.gameRepository = gameRepository
  }

  async execute() {
    return await this.gameRepository.getAllGameActions()
  }
}

export default GetAllGameActionsUseCase
