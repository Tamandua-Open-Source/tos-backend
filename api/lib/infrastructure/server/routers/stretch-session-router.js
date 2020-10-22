import { Router } from 'express'
import ExpressRouterAdapter from '../../../interfaces/express-adapters/express-router-adapter'
import ExpressMiddlewareAdapter from '../../../interfaces/express-adapters/express-middleware-adapter'
import StretchSessionControllerComposer from '../../../interfaces/controllers/composers/stretch-session-controller-composer'
import AuthMiddlewareComposer from '../../../interfaces/middlewares/composers/auth-middleware-composer'

const stretchSessionController = StretchSessionControllerComposer.compose()
const authMiddleware = AuthMiddlewareComposer.compose()

const router = Router()

router.get(
  '/stretchSessions/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    stretchSessionController.getAllStretchSessions(req)
  )
)

router.get(
  '/stretchSessions/:stretchSessionId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    stretchSessionController.getStretchSession(req)
  )
)

router.get(
  '/bodyParts/:bodyPartId/stretchMovements/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    stretchSessionController.getStretchMovementByBodyPartId(req)
  )
)

router.get(
  '/bodyParts/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    stretchSessionController.getAllBodyParts(req)
  )
)

router.get(
  '/stretchChallenges/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    stretchSessionController.getAllStretchChallenges(req)
  )
)

router.get(
  '/stretchChallenges/:stretchChallengeId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    stretchSessionController.getStretchChallengeById(req)
  )
)

router.get(
  '/users/me/stretchChallenges/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    stretchSessionController.getStretchChallengesByUserId(req)
  )
)

router.post(
  '/users/me/stretchChallenges/:stretchChallengeId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    stretchSessionController.addUserStretchChallenge(req)
  )
)

router.delete(
  '/users/me/stretchChallenges/:stretchChallengeId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    stretchSessionController.deleteUserStretchChallenge(req)
  )
)

router.patch(
  '/users/me/stretchChallenges/:stretchChallengeId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    stretchSessionController.updateUserStretchChallenge(req)
  )
)

export default router
