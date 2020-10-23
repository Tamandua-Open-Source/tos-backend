import { Router } from 'express'
import ExpressRouterAdapter from '../../../interfaces/express-adapters/express-router-adapter'
import ExpressMiddlewareAdapter from '../../../interfaces/express-adapters/express-middleware-adapter'
import ConfigurationControllerComposer from '../../../interfaces/controllers/composers/configuration-controller-composer'
import AuthMiddlewareComposer from '../../../interfaces/middlewares/composers/auth-middleware-composer'

const configurationController = ConfigurationControllerComposer.compose()
const authMiddleware = AuthMiddlewareComposer.compose()

const router = Router()

router.get(
  '/',
  ExpressRouterAdapter.adapt((req) =>
    configurationController.getConfiguration(req)
  )
)

export default router
