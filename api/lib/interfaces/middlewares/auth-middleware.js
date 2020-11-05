import ClientError from '../core/client-error'

class AuthMiddleware {
  constructor({ verifyTokenUseCase, verifyApiKeyUseCase }) {
    this.verifyTokenUseCase = verifyTokenUseCase
    this.verifyApiKeyUseCase = verifyApiKeyUseCase
  }

  async verifyToken(req) {
    const idToken = req.headers['authorization']
    if (!idToken) throw ClientError.unauthorized()

    //BYPASS
    if (idToken == 123) {
      return {
        userId: 'vN7Kodp84zQg1KDTPd3IfwvaF1r1',
        name: 'Test Account',
        email: '@test.com',
        idToken,
      }
    }

    const user = await this.verifyTokenUseCase.execute(idToken)
    if (!user) throw ClientError.forbidden()

    return {
      userId: user.userId,
      name: user.name,
      email: user.email,
      idToken,
    }
  }

  async verifyApiKey(req) {
    const apiKey = req.headers['authorization']
    if (!apiKey) throw ClientError.unauthorized()

    const success = await this.verifyApiKeyUseCase.execute(apiKey)
    if (!success) throw ClientError.forbidden()
  }
}

export default AuthMiddleware
