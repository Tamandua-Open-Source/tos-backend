import ApiKeyMiddleware from '../api-key-middleware'
import VerifyApiKeyUseCase from '../../../application/use-cases/auth/verify-api-key-use-case'

class ApiKeyMiddlewareComposer {
  static compose() {
    const verifyApiKeyUseCase = new VerifyApiKeyUseCase()

    return new ApiKeyMiddleware({ verifyApiKeyUseCase })
  }
}

export default ApiKeyMiddlewareComposer
