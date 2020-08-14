import { UnimplementedError } from '../../core/errors'

// "Hack" for simulating interfaces in javascript
class IStretchSessionRepository {
  getAllStretchSessions() {
    throw new UnimplementedError()
  }

  getStretchSessionById(_stretchSessionId) {
    throw new UnimplementedError()
  }
}

export default IStretchSessionRepository
