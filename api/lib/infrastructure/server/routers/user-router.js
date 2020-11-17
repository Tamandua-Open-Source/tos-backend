import { Router } from 'express'
import ExpressRouterAdapter from '../../../interfaces/express-adapters/express-router-adapter'
import ExpressMiddlewareAdapter from '../../../interfaces/express-adapters/express-middleware-adapter'
import AuthMiddlewareComposer from '../../../interfaces/middlewares/composers/auth-middleware-composer'

import UserControllerComposer from '../../../interfaces/controllers/composers/user-controller-composer'

const userController = UserControllerComposer.compose()
const authMiddleware = AuthMiddlewareComposer.compose()

const router = Router()

//core
router.get(
  '/users',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.getAllUsers(req))
)
router.post(
  '/users/login',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.signInUser(req))
)
router.get(
  '/users/me',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.getUser(req))
)
router.put(
  '/users/me',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.updateUser(req))
)
router.delete(
  '/users/me',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.deleteUser(req))
)

//user - preference
router.get(
  '/users/me/preferences',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.getUserPreferences(req))
)
router.patch(
  '/users/me/preferences/fcm',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    userController.patchUserPreferenceFcmToken(req)
  )
)
router.patch(
  '/users/me/preferences/wwa',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    userController.patchUserPreferenceWeeklyWorkActivity(req)
  )
)
router.patch(
  '/users/me/preferences/wsa',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    userController.patchUserPreferenceWeeklyStretchActivity(req)
  )
)
router.patch(
  '/users/me/preferences/goal',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    userController.patchUserPreferenceGoal(req)
  )
)
router.patch(
  '/users/me/preferences/fst',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    userController.patchUserPreferenceFixedStartTime(req)
  )
)
router.patch(
  '/users/me/preferences/fsp',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    userController.patchUserPreferenceFixedStartPeriod(req)
  )
)
router.patch(
  '/users/me/preferences/notification',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    userController.patchUserPreferenceNotification(req)
  )
)

//group
router.get(
  '/groups',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.getAllGroups(req))
)
router.get(
  '/groups/:groupId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.getGroupById(req))
)
router.post(
  '/groups',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.addGroup(req))
)
router.patch(
  '/groups/:groupId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.updateGroup(req))
)
router.delete(
  '/groups/:groupId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.deleteGroup(req))
)

//user - group
router.get(
  '/users/me/groups',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.getGroupsByUserId(req))
)
router.post(
  '/users/:userId/groups/:groupId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.addUserGroup(req))
)
router.patch(
  '/users/:userId/groups/:groupId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.updateUserGroup(req))
)
router.delete(
  '/users/:userId/groups/:groupId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => userController.deleteUserGroup(req))
)

export default router
