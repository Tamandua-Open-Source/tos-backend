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

  getUserPreferences(_userId) {
    throw new UnimplementedError()
  }

  createUserPreferences(_userId) {
    throw new UnimplementedError()
  }

  deleteUserPreferences(_userId) {
    throw new UnimplementedError()
  }

  patchUserPreferenceFcmToken(_userId, _fcmToken) {
    throw new UnimplementedError()
  }

  patchUserPreferenceWeeklyWorkActivity(_userId, _updatedFields) {
    throw new UnimplementedError()
  }

  patchUserPreferenceWeeklyStretchActivity(_userId, _updatedFields) {
    throw new UnimplementedError()
  }

  patchUserPreferenceWeeklyStretchActivity(_userId, _updatedFields) {
    throw new UnimplementedError()
  }

  patchUserPreferenceFixedStartTime(_userId, _startTime) {
    throw new UnimplementedError()
  }

  patchUserPreferenceFixedStartPeriod(_userId, _startPeriodId) {
    throw new UnimplementedError()
  }

  patchUserPreferenceCycleDuration(_userId, _workDuration, _breakDuration) {
    throw new UnimplementedError()
  }

  patchUserPreferenceGoal(_userId, _updatedFields) {
    throw new UnimplementedError()
  }
}

export default IUserRepository
