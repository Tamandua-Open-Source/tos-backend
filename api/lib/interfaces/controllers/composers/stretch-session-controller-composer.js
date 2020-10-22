import StretchSessionRepository from '../../../infrastructure/repositories/stretch-session-repository'
import StretchSessionController from '../stretch-session-controller'
import {
  GetAllStretchSessionsUseCase,
  GetStretchSessionByIdUseCase,
  GetStretchMovementByBodyPartIdUseCase,
  GetAllBodyPartsUseCase,
  GetAllStretchChallengesUseCase,
  GetStretchChallengeByIdUseCase,
  GetStretchChallengesByUserIdUseCase,
  AddUserStretchChallengeUseCase,
  DeleteUserStretchChallengeUseCase,
  UpdateUserStretchChallengeUseCase,
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

    const getStretchMovementByBodyPartIdUseCase = new GetStretchMovementByBodyPartIdUseCase(
      {
        stretchSessionRepository,
      }
    )

    const getAllBodyPartsUseCase = new GetAllBodyPartsUseCase({
      stretchSessionRepository,
    })

    const getAllStretchChallengesUseCase = new GetAllStretchChallengesUseCase({
      stretchSessionRepository,
    })

    const getStretchChallengeByIdUseCase = new GetStretchChallengeByIdUseCase({
      stretchSessionRepository,
    })

    const getStretchChallengesByUserIdUseCase = new GetStretchChallengesByUserIdUseCase(
      {
        stretchSessionRepository,
      }
    )

    const addUserStretchChallengeUseCase = new AddUserStretchChallengeUseCase({
      stretchSessionRepository,
    })

    const deleteUserStretchChallengeUseCase = new DeleteUserStretchChallengeUseCase(
      {
        stretchSessionRepository,
      }
    )

    const updateUserStretchChallengeUseCase = new UpdateUserStretchChallengeUseCase(
      {
        stretchSessionRepository,
      }
    )

    return new StretchSessionController({
      getAllStretchSessionsUseCase,
      getStretchSessionByIdUseCase,
      getStretchMovementByBodyPartIdUseCase,
      getAllBodyPartsUseCase,
      getAllStretchChallengesUseCase,
      getStretchChallengeByIdUseCase,
      getStretchChallengesByUserIdUseCase,
      addUserStretchChallengeUseCase,
      deleteUserStretchChallengeUseCase,
      updateUserStretchChallengeUseCase,
    })
  }
}

export default StretchSessionControllerComposer
