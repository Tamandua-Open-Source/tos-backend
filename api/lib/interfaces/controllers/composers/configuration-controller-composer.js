import ConfigurationRepository from '../../../infrastructure/repositories/configuration-repository'
import ConfigurationController from '../configuration-controller'

import { GetConfigurationUseCase } from '../../../application/use-cases/configuration'

class ConfigurationControllerComposer {
  static compose() {
    const configurationRepository = new ConfigurationRepository()

    const getConfigurationUseCase = new GetConfigurationUseCase({
      configurationRepository,
    })

    return new ConfigurationController({
      getConfigurationUseCase,
    })
  }
}

export default ConfigurationControllerComposer
