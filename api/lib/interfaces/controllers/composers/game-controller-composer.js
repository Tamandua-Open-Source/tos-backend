import FirebaseAdminFacade from '../../../infrastructure/firebase/firebase-admin-facade'
import GameRepository from '../../../infrastructure/repositories/game-repository'
import UserRepository from '../../../infrastructure/repositories/user-repository'
import GameController from '../game-controller'

import {
  //achievement
  GetAllAchievementsUseCase,
  //core
  GetGameByUserIdUseCase,
  //game action
  GetAllGameActionsUseCase,
  //level
  GetAllLevelsUseCase,
  //user - game action
  AddUserGameActionUseCase,
} from '../../../application/use-cases/game'

class GameControllerComposer {
  static compose() {
    const firebaseAdminFacade = new FirebaseAdminFacade()
    const gameRepository = new GameRepository()
    const userRepository = new UserRepository()

    //achievement
    const getAllAchievementsUseCase = new GetAllAchievementsUseCase({
      gameRepository,
      firebaseAdminFacade,
    })

    //core
    const getGameByUserIdUseCase = new GetGameByUserIdUseCase({
      gameRepository,
      firebaseAdminFacade,
    })

    //game action
    const getAllGameActionsUseCase = new GetAllGameActionsUseCase({
      gameRepository,
      firebaseAdminFacade,
    })

    //level
    const getAllLevelsUseCase = new GetAllLevelsUseCase({
      gameRepository,
      firebaseAdminFacade,
    })

    //user - game action
    const addUserGameActionUseCase = new AddUserGameActionUseCase({
      gameRepository,
      userRepository,
      firebaseAdminFacade,
    })

    return new GameController({
      //achievement
      getAllAchievementsUseCase,
      //core
      getGameByUserIdUseCase,
      //game action
      getAllGameActionsUseCase,
      //level
      getAllLevelsUseCase,
      //user - game action
      addUserGameActionUseCase,
    })
  }
}

export default GameControllerComposer
