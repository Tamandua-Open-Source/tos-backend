import HttpResponse from '../core/http-response'

class ApiKeyMiddleware {
  constructor({ verifyApiKeyUseCase }) {
    this.verifyApiKeyUseCase = verifyApiKeyUseCase
  }

  async verifyApiKey(req) {
    try {
      const apiKey = req.headers['authorization']

      if (!apiKey) {
        return {
          response: 'error',
          error: HttpResponse.badRequest('Please provide api key'),
        }
      }

      const success = await this.verifyApiKeyUseCase.execute(apiKey)

      if (!success) {
        return {
          response: 'error',
          error: HttpResponse.badRequest('Please provide a valid api key'),
        }
      }

      return {
        response: 'ok',
      }
    } catch (error) {
      console.log(error)
      return {
        response: 'error',
        error: HttpResponse.unauthorizedError(),
      }
    }
  }
}

export default ApiKeyMiddleware
