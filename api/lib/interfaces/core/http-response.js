import { UnauthorizedError, ServerError } from './errors'

class HttpResponse {
  static ok(body) {
    return {
      statusCode: 200,
      body,
    }
  }

  static badRequest(message) {
    return {
      statusCode: 400,
      body: {
        error: message,
      },
    }
  }

  static unauthorizedError() {
    return {
      statusCode: 401,
      body: {
        error: new UnauthorizedError().message,
      },
    }
  }

  static serverError() {
    return {
      statusCode: 500,
      body: {
        error: new ServerError().message,
      },
    }
  }
}

export default HttpResponse
