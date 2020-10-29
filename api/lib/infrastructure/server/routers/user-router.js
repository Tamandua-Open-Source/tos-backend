import { Router } from 'express'
import ExpressRouterAdapter from '../../../interfaces/express-adapters/express-router-adapter'
import ExpressMiddlewareAdapter from '../../../interfaces/express-adapters/express-middleware-adapter'
import AuthMiddlewareComposer from '../../../interfaces/middlewares/composers/auth-middleware-composer'

import UserControllerComposer from '../../../interfaces/controllers/composers/user-controller-composer'

const userController = UserControllerComposer.compose()
const authMiddleware = AuthMiddlewareComposer.compose()

const router = Router()

router.get(
  '/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.getAllUsers(req))
)

router.post(
  '/login',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.signInUser(req))
)

router.get(
  '/me',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.getUser(req))
)

router.put(
  '/me',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.updateUser(req))
)

router.delete(
  '/me',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.deleteUser(req))
)

router.get(
  '/me/preferences',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.getUserPreferences(req))
)

router.patch(
  '/me/preferences/fcm',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    userController.patchUserPreferenceFcmToken(req)
  )
)

router.patch(
  '/me/preferences/wwa',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    userController.patchUserPreferenceWeeklyWorkActivity(req)
  )
)

router.patch(
  '/me/preferences/wsa',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    userController.patchUserPreferenceWeeklyStretchActivity(req)
  )
)

router.patch(
  '/me/preferences/goal',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    userController.patchUserPreferenceGoal(req)
  )
)

router.patch(
  '/me/preferences/fst',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    userController.patchUserPreferenceFixedStartTime(req)
  )
)

router.patch(
  '/me/preferences/fsp',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    userController.patchUserPreferenceFixedStartPeriod(req)
  )
)

export default router
