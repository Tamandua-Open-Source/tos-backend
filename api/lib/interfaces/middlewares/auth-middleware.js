import HttpResponse from '../core/http-response'

class AuthMiddleware {
  constructor({ verifyTokenUseCase }) {
    this.verifyTokenUseCase = verifyTokenUseCase
  }

  async verifyToken(req) {
    try {
      const idToken = req.headers['authorization']
      if (!idToken) {
        //BYPASS
        return {
          response: 'ok',
          props: { userId: 'vN7Kodp84zQg1KDTPd3IfwvaF1r1' },
        }

        return {
          response: 'error',
          error: HttpResponse.badRequest('Please provide user idToken'),
        }
      }

      const userId = await this.verifyTokenUseCase.execute(idToken)

      return { response: 'ok', props: { userId } }
    } catch (error) {
      console.log(error)
      return {
        response: 'error',
        error: HttpResponse.unauthorizedError(),
      }
    }
  }
}

export default AuthMiddleware
