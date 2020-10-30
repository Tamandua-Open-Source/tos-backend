import FirebaseAdminFacade from '../../../infrastructure/firebase/firebase-admin-facade'
import UserRepository from '../../../infrastructure/repositories/user-repository'
import TimerServiceFacade from '../../../infrastructure/facades/timer-service-facade'

import ConfigurationRepository from '../../../infrastructure/repositories/configuration-repository'
import ConfigurationController from '../configuration-controller'

import {
  GetConfigurationUseCase,
  WipeAllRegisteredUsersUseCase,
} from '../../../application/use-cases/configuration'

class ConfigurationControllerComposer {
  static compose() {
    const firebaseAdminFacade = new FirebaseAdminFacade()
    const userRepository = new UserRepository()
    const timerServiceFacade = new TimerServiceFacade()

    const configurationRepository = new ConfigurationRepository()

    const getConfigurationUseCase = new GetConfigurationUseCase({
      configurationRepository,
    })

    const wipeAllRegisteredUsersUseCase = new WipeAllRegisteredUsersUseCase({
      firebaseAdminFacade,
      userRepository,
      timerServiceFacade,
    })

    return new ConfigurationController({
      getConfigurationUseCase,
      wipeAllRegisteredUsersUseCase,
    })
  }
}

export default ConfigurationControllerComposer
