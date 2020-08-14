import StretchSessionRepository from '../../../infrastructure/repositories/stretch-session-repository'
import StretchSessionController from '../stretch-session-controller'
import {
  GetAllStretchSessionsUseCase,
  GetStretchSessionByIdUseCase,
} from '../../../application/use-cases/stretch-sessions'

class StretchSessionControllerComposer {
  static compose() {
    const stretchSessionRepository = new StretchSessionRepository()

    const getAllStretchSessionsUseCase = new GetAllStretchSessionsUseCase({
      stretchSessionRepository,
    })

    const getStretchSessionByIdUseCase = new GetStretchSessionByIdUseCase({
      stretchSessionRepository,
    })

    return new StretchSessionController({
      getAllStretchSessionsUseCase,
      getStretchSessionByIdUseCase,
    })
  }
}

export default StretchSessionControllerComposer
