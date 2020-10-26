import WorkoutRepository from '../../../infrastructure/repositories/workout-repository'
import WorkoutController from '../workout-controller'
import {
  //body part
  GetAllBodyPartsUseCase,
  GetBodyPartByIdUseCase,
  AddBodyPartUseCase,
  UpdateBodyPartUseCase,
  DeleteBodyPartUseCase,
  //stretch movement
  GetAllStretchSessionsUseCase,
  GetStretchSessionByIdUseCase,
  GetStretchMovementByBodyPartIdUseCase,
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

    //body part
    const getAllBodyPartsUseCase = new GetAllBodyPartsUseCase({
      workoutRepository,
    })
    const getBodyPartByIdUseCase = new GetBodyPartByIdUseCase({
      workoutRepository,
    })
    const addBodyPartUseCase = new AddBodyPartUseCase({
      workoutRepository,
    })
    const updateBodyPartUseCase = new UpdateBodyPartUseCase({
      workoutRepository,
    })
    const deleteBodyPartUseCase = new DeleteBodyPartUseCase({
      workoutRepository,
    })

    //stretch movement
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
      //body part
      getAllBodyPartsUseCase,
      getBodyPartByIdUseCase,
      addBodyPartUseCase,
      updateBodyPartUseCase,
      deleteBodyPartUseCase,
      //stretch movement
      getAllStretchSessionsUseCase,
      getStretchSessionByIdUseCase,
      getStretchMovementByBodyPartIdUseCase,
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
