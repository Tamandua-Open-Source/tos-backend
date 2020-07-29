import FirebaseAdminFacade from '../../../infrastructure/firebase/firebase-admin-facade'
import AuthMiddleware from '../auth-middleware'
import VerifyTokenUseCase from '../../../application/use-cases/auth/verify-token-use-case'

class AuthMiddlewareComposer {
  static compose() {
    const firebaseAdminFacade = new FirebaseAdminFacade()

    const verifyTokenUseCase = new VerifyTokenUseCase({ firebaseAdminFacade })
    return new AuthMiddleware({ verifyTokenUseCase })
  }
}

export default AuthMiddlewareComposer
