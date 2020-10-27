import WorkoutRepository from '../../../infrastructure/repositories/workout-repository'
import WorkoutController from '../workout-controller'
import {
  //body part
  GetAllBodyPartsUseCase,
  GetBodyPartByIdUseCase,
  AddBodyPartUseCase,
  UpdateBodyPartUseCase,
  DeleteBodyPartUseCase,
  //stretch movement - body part
  GetStretchMovementByBodyPartIdUseCase,
  AddStretchMovementBodyPartUseCase,
  DeleteStretchMovementBodyPartUseCase,
  //stretch movement
  GetAllStretchMovementsUseCase,
  GetStretchMovementByIdUseCase,
  AddStretchMovementUseCase,
  UpdateStretchMovementUseCase,
  DeleteStretchMovementUseCase,
  //stretch session
  GetAllStretchSessionsUseCase,
  GetStretchSessionByIdUseCase,
  AddStretchSessionUseCase,
  UpdateStretchSessionUseCase,
  DeleteStretchSessionUseCase,
  //stretch challenge
  GetAllStretchChallengesUseCase,
  GetStretchChallengeByIdUseCase,
  AddStretchChallengeUseCase,
  UpdateStretchChallengeUseCase,
  DeleteStretchChallengeUseCase,
  //others
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

    //stretch movement - body part
    const getStretchMovementByBodyPartIdUseCase = new GetStretchMovementByBodyPartIdUseCase(
      {
        workoutRepository,
      }
    )
    const addStretchMovementBodyPartUseCase = new AddStretchMovementBodyPartUseCase(
      {
        workoutRepository,
      }
    )
    const deleteStretchMovementBodyPartUseCase = new DeleteStretchMovementBodyPartUseCase(
      {
        workoutRepository,
      }
    )

    //stretch movement
    const getAllStretchMovementsUseCase = new GetAllStretchMovementsUseCase({
      workoutRepository,
    })
    const getStretchMovementByIdUseCase = new GetStretchMovementByIdUseCase({
      workoutRepository,
    })
    const addStretchMovementUseCase = new AddStretchMovementUseCase({
      workoutRepository,
    })
    const updateStretchMovementUseCase = new UpdateStretchMovementUseCase({
      workoutRepository,
    })
    const deleteStretchMovementUseCase = new DeleteStretchMovementUseCase({
      workoutRepository,
    })

    //stretch session
    const getAllStretchSessionsUseCase = new GetAllStretchSessionsUseCase({
      workoutRepository,
    })
    const getStretchSessionByIdUseCase = new GetStretchSessionByIdUseCase({
      workoutRepository,
    })
    const addStretchSessionUseCase = new AddStretchSessionUseCase({
      workoutRepository,
    })
    const updateStretchSessionUseCase = new UpdateStretchSessionUseCase({
      workoutRepository,
    })
    const deleteStretchSessionUseCase = new DeleteStretchSessionUseCase({
      workoutRepository,
    })

    //stretch challenge
    const getAllStretchChallengesUseCase = new GetAllStretchChallengesUseCase({
      workoutRepository,
    })
    const getStretchChallengeByIdUseCase = new GetStretchChallengeByIdUseCase({
      workoutRepository,
    })
    const addStretchChallengeUseCase = new AddStretchChallengeUseCase({
      workoutRepository,
    })
    const updateStretchChallengeUseCase = new UpdateStretchChallengeUseCase({
      workoutRepository,
    })
    const deleteStretchChallengeUseCase = new DeleteStretchChallengeUseCase({
      workoutRepository,
    })

    //others
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
      //stretch movement - body part
      getStretchMovementByBodyPartIdUseCase,
      addStretchMovementBodyPartUseCase,
      deleteStretchMovementBodyPartUseCase,
      //stretch movement
      getAllStretchMovementsUseCase,
      getStretchMovementByIdUseCase,
      addStretchMovementUseCase,
      updateStretchMovementUseCase,
      deleteStretchMovementUseCase,
      //stretch session
      getAllStretchSessionsUseCase,
      getStretchSessionByIdUseCase,
      addStretchSessionUseCase,
      updateStretchSessionUseCase,
      deleteStretchSessionUseCase,
      //stretch challenge
      getAllStretchChallengesUseCase,
      getStretchChallengeByIdUseCase,
      addStretchChallengeUseCase,
      updateStretchChallengeUseCase,
      deleteStretchChallengeUseCase,
      //others
      getStretchChallengesByUserIdUseCase,
      addUserStretchChallengeUseCase,
      deleteUserStretchChallengeUseCase,
      updateUserStretchChallengeUseCase,
    })
  }
}

export default WorkoutControllerComposer
