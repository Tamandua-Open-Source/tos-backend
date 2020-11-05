class ClientError extends Error {
  constructor(message = 'Bad Request', errorCode = '400', path) {
    super(message)
    this.errorCode = errorCode.toString()
    this.path = path
    this.name = `ClientError_${errorCode}`
  }

  static badRequest(message = 'Bad Request') {
    return new ClientError(message, 400)
  }

  static unauthorized(message = 'Unauthorized') {
    return new ClientError(message, 401)
  }

  static forbidden(message = 'Forbidden') {
    return new ClientError(message, 403)
  }

  static notFound(message = 'Not Found') {
    return new ClientError(message, 404)
  }

  add(error) {
    if (!this.errors) this.errors = []
    this.errors.push(error)
    return this
  }

  setPath(path) {
    this.path = path
    return this
  }
}

export default ClientError
