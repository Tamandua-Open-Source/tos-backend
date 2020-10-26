import { Router } from 'express'
import ExpressRouterAdapter from '../../../interfaces/express-adapters/express-router-adapter'
import ExpressMiddlewareAdapter from '../../../interfaces/express-adapters/express-middleware-adapter'
import AuthMiddlewareComposer from '../../../interfaces/middlewares/composers/auth-middleware-composer'

import WorkoutControllerComposer from '../../../interfaces/controllers/composers/workout-controller-composer'

const workoutController = WorkoutControllerComposer.compose()
const authMiddleware = AuthMiddlewareComposer.compose()

const router = Router()

//body part
router.get(
  '/bodyParts/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => workoutController.getAllBodyParts(req))
)
router.get(
  '/bodyParts/:bodyPartId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => workoutController.getBodyPartById(req))
)
router.post(
  '/bodyParts/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => workoutController.addBodyPart(req))
)
router.patch(
  '/bodyParts/:bodyPartId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => workoutController.updateBodyPart(req))
)
router.delete(
  '/bodyParts/:bodyPartId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => workoutController.deleteBodyPart(req))
)

//stretch movement

router.get(
  '/stretchSessions/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.getAllStretchSessions(req)
  )
)

router.get(
  '/stretchSessions/:stretchSessionId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => workoutController.getStretchSession(req))
)

router.get(
  '/bodyParts/:bodyPartId/stretchMovements/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.getStretchMovementByBodyPartId(req)
  )
)

router.get(
  '/stretchChallenges/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.getAllStretchChallenges(req)
  )
)

router.get(
  '/stretchChallenges/:stretchChallengeId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.getStretchChallengeById(req)
  )
)

router.get(
  '/users/me/stretchChallenges/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.getStretchChallengesByUserId(req)
  )
)

router.post(
  '/users/me/stretchChallenges/:stretchChallengeId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.addUserStretchChallenge(req)
  )
)

router.delete(
  '/users/me/stretchChallenges/:stretchChallengeId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.deleteUserStretchChallenge(req)
  )
)

router.patch(
  '/users/me/stretchChallenges/:stretchChallengeId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.updateUserStretchChallenge(req)
  )
)

export default router
