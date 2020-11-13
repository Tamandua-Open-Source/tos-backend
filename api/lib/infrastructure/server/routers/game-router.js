import { Router } from 'express'
import ExpressRouterAdapter from '../../../interfaces/express-adapters/express-router-adapter'
import ExpressMiddlewareAdapter from '../../../interfaces/express-adapters/express-middleware-adapter'
import AuthMiddlewareComposer from '../../../interfaces/middlewares/composers/auth-middleware-composer'
import GameControllerComposer from '../../../interfaces/controllers/composers/game-controller-composer'

const gameControllerComposer = GameControllerComposer.compose()
const authMiddleware = AuthMiddlewareComposer.compose()

const router = Router()

//achievement
router.get(
  '/achievements',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    gameControllerComposer.getAllAchievements(req)
  )
)

//core
router.get(
  '/users/me/game',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    gameControllerComposer.getGameByUserId(req)
  )
)

//game action
router.get(
  '/gameActions',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    gameControllerComposer.getAllGameActions(req)
  )
)

//level
router.get(
  '/levels',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => gameControllerComposer.getAllLevels(req))
)

//user - game action
router.post(
  '/users/me/gameActions/:gameActionId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    gameControllerComposer.addUserGameAction(req)
  )
)

export default router
