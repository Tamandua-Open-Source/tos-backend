import UserRepository from '../../../infrastructure/repositories/user-repository'
import UserController from '../user-controller'
import TimerServiceFacade from '../../../infrastructure/facades/timer-service-facade'
import {
  DeleteUserUseCase,
  GetAllUsersUseCase,
  GetUserUseCase,
  SignInUserUseCase,
  UpdateUserUseCase,
  GetUserPreferencesUseCase,
  PatchUserPreferenceFcmTokenUseCase,
  PatchUserPreferenceWeeklyWorkActivityUseCase,
  PatchUserPreferenceWeeklyStretchActivityUseCase,
  PatchUserPreferenceFixedStartTimeUseCase,
  PatchUserPreferenceFixedStartPeriodUseCase,
  PatchUserPreferenceGoalUseCase,
} from '../../../application/use-cases/users'

class UserControllerComposer {
  static compose() {
    const userRepository = new UserRepository()

    const timerServiceFacade = new TimerServiceFacade()

    const deleteUserUseCase = new DeleteUserUseCase({
      userRepository,
      timerServiceFacade,
    })
    const getAllUsersUseCase = new GetAllUsersUseCase({ userRepository })
    const getUserUseCase = new GetUserUseCase({ userRepository })
    const signInUserUseCase = new SignInUserUseCase({
      userRepository,
      timerServiceFacade,
    })
    const updateUserUseCase = new UpdateUserUseCase({ userRepository })
    const getUserPreferencesUseCase = new GetUserPreferencesUseCase({
      userRepository,
    })
    const patchUserPreferenceFcmTokenUseCase = new PatchUserPreferenceFcmTokenUseCase(
      {
        userRepository,
        timerServiceFacade,
      }
    )
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
        timerServiceFacade,
      }
    )
    const patchUserPreferenceFixedStartPeriodUseCase = new PatchUserPreferenceFixedStartPeriodUseCase(
      {
        userRepository,
        timerServiceFacade,
      }
    )
    const patchUserPreferenceGoalUseCase = new PatchUserPreferenceGoalUseCase({
      userRepository,
    })

    return new UserController({
      deleteUserUseCase,
      getAllUsersUseCase,
      getUserUseCase,
      signInUserUseCase,
      updateUserUseCase,
      getUserPreferencesUseCase,
      patchUserPreferenceFcmTokenUseCase,
      patchUserPreferenceWeeklyWorkActivityUseCase,
      patchUserPreferenceWeeklyStretchActivityUseCase,
      patchUserPreferenceFixedStartTimeUseCase,
      patchUserPreferenceFixedStartPeriodUseCase,
      patchUserPreferenceGoalUseCase,
    })
  }
}

export default UserControllerComposer
