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

//stretch movement - body part
router.get(
  '/bodyParts/:bodyPartId/stretchMovements/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.getStretchMovementsByBodyPartId(req)
  )
)
router.post(
  '/bodyParts/:bodyPartId/stretchMovements/:stretchMovementId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.addStretchMovementBodyPart(req)
  )
)
router.delete(
  '/bodyParts/:bodyPartId/stretchMovements/:stretchMovementId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.deleteStretchMovementBodyPart(req)
  )
)

//stretch movement
router.get(
  '/stretchMovements/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.getAllStretchMovements(req)
  )
)
router.get(
  '/stretchMovements/:stretchMovementId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.getStretchMovementById(req)
  )
)
router.post(
  '/stretchMovements/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => workoutController.addStretchMovement(req))
)
router.patch(
  '/stretchMovements/:stretchMovementId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.updateStretchMovement(req)
  )
)
router.delete(
  '/stretchMovements/:stretchMovementId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.deleteStretchMovement(req)
  )
)

//stretch session - stretch movement
router.get(
  '/stretchMovements/:stretchMovementId/stretchSessions/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.getStretchSessionByStretchMovementId(req)
  )
)
router.post(
  '/stretchMovements/:stretchMovementId/stretchSessions/:stretchSessionId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.addStretchSessionStretchMovement(req)
  )
)
router.delete(
  '/stretchMovements/:stretchMovementId/stretchSessions/:stretchSessionId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.deleteStretchSessionStretchMovement(req)
  )
)

//stretch session
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
  ExpressRouterAdapter.adapt((req) =>
    workoutController.getStretchSessionById(req)
  )
)
router.post(
  '/stretchSessions/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => workoutController.addStretchSession(req))
)
router.patch(
  '/stretchSessions/:stretchSessionId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.updateStretchSession(req)
  )
)
router.delete(
  '/stretchSessions/:stretchSessionId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.deleteStretchSession(req)
  )
)

//stretch challenge - stretch session
router.get(
  '/stretchSessions/:stretchSessionId/stretchChallenges/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.getStretchChallengesByStretchSessionId(req)
  )
)
router.post(
  '/stretchSessions/:stretchSessionId/stretchChallenges/:stretchChallengeId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.addStretchChallengeStretchSession(req)
  )
)
router.delete(
  '/stretchSessions/:stretchSessionId/stretchChallenges/:stretchChallengeId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.deleteStretchChallengeStretchSession(req)
  )
)

//stretch challenge
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
router.post(
  '/stretchChallenges/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.addStretchChallenge(req)
  )
)
router.patch(
  '/stretchChallenges/:stretchChallengeId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.updateStretchChallenge(req)
  )
)
router.delete(
  '/stretchChallenges/:stretchChallengeId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.deleteStretchChallenge(req)
  )
)

//user - stretch challenge
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
router.patch(
  '/users/me/stretchChallenges/:stretchChallengeId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.updateUserStretchChallenge(req)
  )
)
router.delete(
  '/users/me/stretchChallenges/:stretchChallengeId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    workoutController.deleteUserStretchChallenge(req)
  )
)

export default router
