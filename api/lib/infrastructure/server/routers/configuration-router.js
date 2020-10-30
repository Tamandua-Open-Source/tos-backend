import { Router } from 'express'
import ExpressRouterAdapter from '../../../interfaces/express-adapters/express-router-adapter'
import ExpressMiddlewareAdapter from '../../../interfaces/express-adapters/express-middleware-adapter'

import ApiKeyMiddlewareComposer from '../../../interfaces/middlewares/composers/api-key-middleware-composer'
import AuthMiddlewareComposer from '../../../interfaces/middlewares/composers/auth-middleware-composer'

import ConfigurationControllerComposer from '../../../interfaces/controllers/composers/configuration-controller-composer'

const configurationController = ConfigurationControllerComposer.compose()
const apiKeyMiddleware = ApiKeyMiddlewareComposer.compose()
const authMiddleware = AuthMiddlewareComposer.compose()

const router = Router()

router.get(
  '/',
  ExpressRouterAdapter.adapt((req) =>
    configurationController.getConfiguration(req)
  )
)

router.post(
  '/wipeServer',
  ExpressMiddlewareAdapter.adapt((req) => apiKeyMiddleware.verifyApiKey(req)),
  ExpressRouterAdapter.adapt((req) => configurationController.wipeServer(req))
)

export default router
