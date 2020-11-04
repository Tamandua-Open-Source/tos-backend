class ServerError extends Error {
  constructor(message = 'Internal Server Error', errorCode = '500', path) {
    super(message)
    this.errorCode = errorCode.toString()
    this.path = path
    this.name = `ServerError_${errorCode}`
  }

  static internal(message = 'Internal Server Error') {
    return new ServerError(message, 500)
  }

  static notImplemented(message = 'Not Implemented') {
    return new ServerError(message, 501)
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

export default ServerError
