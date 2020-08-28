import { UnimplementedError } from '../../core/errors'

class IUserRepository {
  getAllUsers() {
    throw new UnimplementedError()
  }

  getUserById(_userId) {
    throw new UnimplementedError()
  }

  createUser(_domainUser) {
    throw new UnimplementedError()
  }

  updateUser(_userId, _updatedFields) {
    throw new UnimplementedError()
  }

  deleteUser(_userId) {
    throw new UnimplementedError()
  }

  patchUserFcmToken(_userId, _fcmToken) {
    throw new UnimplementedError()
  }

  getUserPreferences(_userId) {
    throw new UnimplementedError()
  }

  createUserPreferences(_userId) {
    throw new UnimplementedError()
  }

  deleteUserPreferences(_userId) {
    throw new UnimplementedError()
  }

  patchUserPreferenceWeeklyWorkActivity(_userId, _updatedFields) {
    throw new UnimplementedError()
  }
}

export default IUserRepository
