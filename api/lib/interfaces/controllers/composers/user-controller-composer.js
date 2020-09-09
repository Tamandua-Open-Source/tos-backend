import UserRepository from '../../../infrastructure/repositories/user-repository'
import UserController from '../user-controller'
import {
  DeleteUserUseCase,
  GetAllUsersUseCase,
  GetUserUseCase,
  SignInUserUseCase,
  UpdateUserUseCase,
  PatchUserFcmTokenUseCase,
  GetUserPreferencesUseCase,
  PatchUserPreferenceWeeklyWorkActivityUseCase,
  PatchUserPreferenceWeeklyStretchActivityUseCase,
  PatchUserPreferenceFixedStartTimeUseCase,
  PatchUserPreferenceFixedStartPeriodUseCase,
  PatchUserPreferenceCycleDurationUseCase,
  PatchUserGoalUseCase,
} from '../../../application/use-cases/users'

class UserControllerComposer {
  static compose() {
    const userRepository = new UserRepository()

    const deleteUserUseCase = new DeleteUserUseCase({ userRepository })
    const getAllUsersUseCase = new GetAllUsersUseCase({ userRepository })
    const getUserUseCase = new GetUserUseCase({ userRepository })
    const signInUserUseCase = new SignInUserUseCase({ userRepository })
    const updateUserUseCase = new UpdateUserUseCase({ userRepository })
    const patchUserFcmTokenUseCase = new PatchUserFcmTokenUseCase({
      userRepository,
    })
    const getUserPreferencesUseCase = new GetUserPreferencesUseCase({
      userRepository,
    })
    const patchUserPreferenceWeeklyWorkActivityUseCase = new PatchUserPreferenceWeeklyWorkActivityUseCase(
      {
        userRepository,
      }
    )
    const patchUserPreferenceWeeklyStretchActivityUseCase = new PatchUserPreferenceWeeklyStretchActivityUseCase(
      {
        userRepository,
      }
    )
    const patchUserPreferenceFixedStartTimeUseCase = new PatchUserPreferenceFixedStartTimeUseCase(
      {
        userRepository,
      }
    )
    const patchUserPreferenceFixedStartPeriodUseCase = new PatchUserPreferenceFixedStartPeriodUseCase(
      {
        userRepository,
      }
    )
    const patchUserPreferenceCycleDurationUseCase = new PatchUserPreferenceCycleDurationUseCase(
      {
        userRepository,
      }
    )
    const patchUserGoalUseCase = new PatchUserGoalUseCase({
      userRepository,
    })

    return new UserController({
      deleteUserUseCase,
      getAllUsersUseCase,
      getUserUseCase,
      signInUserUseCase,
      updateUserUseCase,
      patchUserFcmTokenUseCase,
      getUserPreferencesUseCase,
      patchUserPreferenceWeeklyWorkActivityUseCase,
      patchUserPreferenceWeeklyStretchActivityUseCase,
      patchUserPreferenceFixedStartTimeUseCase,
      patchUserPreferenceFixedStartPeriodUseCase,
      patchUserPreferenceCycleDurationUseCase,
      patchUserGoalUseCase,
    })
  }
}

export default UserControllerComposer
