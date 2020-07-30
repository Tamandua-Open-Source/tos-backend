class UnimplementedError extends Error {
  constructor() {
    super('Method not implemented')
    this.name = 'UnimplementedError'
  }
}

class MissingObjectError extends Error {
  constructor(objectName) {
    super(`${objectName} does not exist`)
    this.name = 'MissingObjectError'
  }
}

export { UnimplementedError, MissingObjectError }
