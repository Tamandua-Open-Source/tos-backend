import WorkoutRepository from '../../../infrastructure/repositories/workout-repository'
import WorkoutController from '../workout-controller'
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
} from '../../../application/use-cases/workout'

class WorkoutControllerComposer {
  static compose() {
    const workoutRepository = new WorkoutRepository()

    const getAllStretchSessionsUseCase = new GetAllStretchSessionsUseCase({
      workoutRepository,
    })

    const getStretchSessionByIdUseCase = new GetStretchSessionByIdUseCase({
      workoutRepository,
    })

    const getStretchMovementByBodyPartIdUseCase = new GetStretchMovementByBodyPartIdUseCase(
      {
        workoutRepository,
      }
    )

    const getAllBodyPartsUseCase = new GetAllBodyPartsUseCase({
      workoutRepository,
    })

    const getAllStretchChallengesUseCase = new GetAllStretchChallengesUseCase({
      workoutRepository,
    })

    const getStretchChallengeByIdUseCase = new GetStretchChallengeByIdUseCase({
      workoutRepository,
    })

    const getStretchChallengesByUserIdUseCase = new GetStretchChallengesByUserIdUseCase(
      {
        workoutRepository,
      }
    )

    const addUserStretchChallengeUseCase = new AddUserStretchChallengeUseCase({
      workoutRepository,
    })

    const deleteUserStretchChallengeUseCase = new DeleteUserStretchChallengeUseCase(
      {
        workoutRepository,
      }
    )

    const updateUserStretchChallengeUseCase = new UpdateUserStretchChallengeUseCase(
      {
        workoutRepository,
      }
    )

    return new WorkoutController({
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

export default WorkoutControllerComposer
