class ServerError extends Error {
  constructor() {
    super('Internal error')
    this.name = 'ServerError'
  }
}

class UnauthorizedError extends Error {
  constructor(paramName) {
    super('Unauthorized')
    this.name = 'UnauthorizedError'
  }
}

module.exports = { ServerError, UnauthorizedError }
