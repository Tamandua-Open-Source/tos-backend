class GetConfigurationUseCase {
  constructor({ configurationRepository }) {
    this.configurationRepository = configurationRepository
  }

  async execute() {
    return await this.configurationRepository.getConfiguration()
  }
}

export default GetConfigurationUseCase
