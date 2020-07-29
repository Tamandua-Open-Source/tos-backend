import { UnimplementedError } from '../../core/errors'

class IUserRepository {
  getAllUsers() {
    throw new UnimplementedError()
  }

  getUserById(userId) {
    throw new UnimplementedError()
  }

  createUser(domainUser) {
    throw new UnimplementedError()
  }

  updateUser(userId, updatedFields) {
    throw new UnimplementedError()
  }

  deleteUser(userId) {
    throw new UnimplementedError()
  }
}

export default IUserRepository
