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
  GetStretchMovementsByBodyPartIdUseCase,
  AddStretchMovementBodyPartUseCase,
  DeleteStretchMovementBodyPartUseCase,
  //stretch movement
  GetAllStretchMovementsUseCase,
  GetStretchMovementByIdUseCase,
  AddStretchMovementUseCase,
  UpdateStretchMovementUseCase,
  DeleteStretchMovementUseCase,
  //stretch session - stretch movement
  GetStretchSessionsByStretchMovementIdUseCase,
  AddStretchSessionStretchMovementUseCase,
  DeleteStretchSessionStretchMovementUseCase,
  //stretch session
  GetAllStretchSessionsUseCase,
  GetStretchSessionByIdUseCase,
  AddStretchSessionUseCase,
  UpdateStretchSessionUseCase,
  DeleteStretchSessionUseCase,
  //stretch challenge - stretch session
  GetStretchChallengesByStretchSessionIdUseCase,
  AddStretchChallengeStretchSessionUseCase,
  DeleteStretchChallengeStretchSessionUseCase,
  //stretch challenge
  GetAllStretchChallengesUseCase,
  GetStretchChallengeByIdUseCase,
  AddStretchChallengeUseCase,
  UpdateStretchChallengeUseCase,
  DeleteStretchChallengeUseCase,
  //user - stretch movement
  GetStretchMovementsByUserIdUseCase,
  AddUserStretchMovementUseCase,
  UpdateUserStretchMovementUseCase,
  DeleteUserStretchMovementUseCase,
  //user - stretch session
  GetStretchSessionsByUserIdUseCase,
  AddUserStretchSessionUseCase,
  UpdateUserStretchSessionUseCase,
  DeleteUserStretchSessionUseCase,
  //user - stretch challenge
  GetStretchChallengesByUserIdUseCase,
  AddUserStretchChallengeUseCase,
  UpdateUserStretchChallengeUseCase,
  DeleteUserStretchChallengeUseCase,
  //recommendation
  GetRecommendedStretchMovementsUseCase,
  GetRecommendedStretchSessionsUseCase,
  GetRecommendedStretchChallengesUseCase,
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
    const getStretchMovementsByBodyPartIdUseCase = new GetStretchMovementsByBodyPartIdUseCase(
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

    //stretch session - stretch movement
    const getStretchSessionsByStretchMovementIdUseCase = new GetStretchSessionsByStretchMovementIdUseCase(
      {
        workoutRepository,
      }
    )
    const addStretchSessionStretchMovementUseCase = new AddStretchSessionStretchMovementUseCase(
      {
        workoutRepository,
      }
    )
    const deleteStretchSessionStretchMovementUseCase = new DeleteStretchSessionStretchMovementUseCase(
      {
        workoutRepository,
      }
    )

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

    //stretch challenge - stretch session
    const getStretchChallengesByStretchSessionIdUseCase = new GetStretchChallengesByStretchSessionIdUseCase(
      { workoutRepository }
    )
    const addStretchChallengeStretchSessionUseCase = new AddStretchChallengeStretchSessionUseCase(
      { workoutRepository }
    )
    const deleteStretchChallengeStretchSessionUseCase = new DeleteStretchChallengeStretchSessionUseCase(
      { workoutRepository }
    )

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

    //user - stretch movement
    const getStretchMovementsByUserIdUseCase = new GetStretchMovementsByUserIdUseCase(
      { workoutRepository }
    )
    const addUserStretchMovementUseCase = new AddUserStretchMovementUseCase({
      workoutRepository,
    })
    const updateUserStretchMovementUseCase = new UpdateUserStretchMovementUseCase(
      { workoutRepository }
    )
    const deleteUserStretchMovementUseCase = new DeleteUserStretchMovementUseCase(
      { workoutRepository }
    )

    //user - stretch session
    const getStretchSessionsByUserIdUseCase = new GetStretchSessionsByUserIdUseCase(
      { workoutRepository }
    )
    const addUserStretchSessionUseCase = new AddUserStretchSessionUseCase({
      workoutRepository,
    })
    const updateUserStretchSessionUseCase = new UpdateUserStretchSessionUseCase(
      { workoutRepository }
    )
    const deleteUserStretchSessionUseCase = new DeleteUserStretchSessionUseCase(
      { workoutRepository }
    )

    //user - stretch challenge
    const getStretchChallengesByUserIdUseCase = new GetStretchChallengesByUserIdUseCase(
      {
        workoutRepository,
      }
    )
    const addUserStretchChallengeUseCase = new AddUserStretchChallengeUseCase({
      workoutRepository,
    })
    const updateUserStretchChallengeUseCase = new UpdateUserStretchChallengeUseCase(
      {
        workoutRepository,
      }
    )
    const deleteUserStretchChallengeUseCase = new DeleteUserStretchChallengeUseCase(
      {
        workoutRepository,
      }
    )

    const getRecommendedStretchMovementsUseCase = new GetRecommendedStretchMovementsUseCase(
      { workoutRepository }
    )
    const getRecommendedStretchSessionsUseCase = new GetRecommendedStretchSessionsUseCase(
      { workoutRepository }
    )
    const getRecommendedStretchChallengesUseCase = new GetRecommendedStretchChallengesUseCase(
      { workoutRepository }
    )

    return new WorkoutController({
      //body part
      getAllBodyPartsUseCase,
      getBodyPartByIdUseCase,
      addBodyPartUseCase,
      updateBodyPartUseCase,
      deleteBodyPartUseCase,
      //stretch movement - body part
      getStretchMovementsByBodyPartIdUseCase,
      addStretchMovementBodyPartUseCase,
      deleteStretchMovementBodyPartUseCase,
      //stretch movement
      getAllStretchMovementsUseCase,
      getStretchMovementByIdUseCase,
      addStretchMovementUseCase,
      updateStretchMovementUseCase,
      deleteStretchMovementUseCase,
      //stretch session - stretch movement
      getStretchSessionsByStretchMovementIdUseCase,
      addStretchSessionStretchMovementUseCase,
      deleteStretchSessionStretchMovementUseCase,
      //stretch session
      getAllStretchSessionsUseCase,
      getStretchSessionByIdUseCase,
      addStretchSessionUseCase,
      updateStretchSessionUseCase,
      deleteStretchSessionUseCase,
      //stretch challenge - stretch session
      getStretchChallengesByStretchSessionIdUseCase,
      addStretchChallengeStretchSessionUseCase,
      deleteStretchChallengeStretchSessionUseCase,
      //stretch challenge
      getAllStretchChallengesUseCase,
      getStretchChallengeByIdUseCase,
      addStretchChallengeUseCase,
      updateStretchChallengeUseCase,
      deleteStretchChallengeUseCase,
      //user - stretch movement
      getStretchMovementsByUserIdUseCase,
      addUserStretchMovementUseCase,
      updateUserStretchMovementUseCase,
      deleteUserStretchMovementUseCase,
      //user - stretch session
      getStretchSessionsByUserIdUseCase,
      addUserStretchSessionUseCase,
      updateUserStretchSessionUseCase,
      deleteUserStretchSessionUseCase,
      //user - stretch challenge
      getStretchChallengesByUserIdUseCase,
      addUserStretchChallengeUseCase,
      updateUserStretchChallengeUseCase,
      deleteUserStretchChallengeUseCase,
      //recommendation
      getRecommendedStretchMovementsUseCase,
      getRecommendedStretchSessionsUseCase,
      getRecommendedStretchChallengesUseCase,
    })
  }
}

export default WorkoutControllerComposer
