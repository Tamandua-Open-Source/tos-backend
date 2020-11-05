import FirebaseAdminFacade from '../../../infrastructure/firebase/firebase-admin-facade'
import AuthMiddleware from '../auth-middleware'
import VerifyTokenUseCase from '../../../application/use-cases/auth/verify-token-use-case'
import VerifyApiKeyUseCase from '../../../application/use-cases/auth/verify-api-key-use-case'

class AuthMiddlewareComposer {
  static compose() {
    const firebaseAdminFacade = new FirebaseAdminFacade()

    const verifyTokenUseCase = new VerifyTokenUseCase({ firebaseAdminFacade })

    const verifyApiKeyUseCase = new VerifyApiKeyUseCase()

    return new AuthMiddleware({ verifyTokenUseCase, verifyApiKeyUseCase })
  }
}

export default AuthMiddlewareComposer
