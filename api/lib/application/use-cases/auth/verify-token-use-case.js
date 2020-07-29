class VerifyTokenUseCase {
  constructor({ firebaseAdminFacade }) {
    this.firebaseAdminFacade = firebaseAdminFacade
  }

  async execute(idToken) {
    return await this.firebaseAdminFacade.verifyToken(idToken)
  }
}

export default VerifyTokenUseCase
