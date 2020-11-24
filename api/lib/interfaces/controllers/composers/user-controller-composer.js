import UserRepository from '../../../infrastructure/repositories/user-repository'
import GameRepository from '../../../infrastructure/repositories/game-repository'
import UserController from '../user-controller'
import TimerServiceFacade from '../../../infrastructure/facades/timer-service-facade'
import AnalyticsServiceFacade from '../../../infrastructure/facades/analytics-service-facade'
import IpWhoIsFacade from '../../../infrastructure/facades/ip-whois-facade'
import {
  //core
  DeleteUserUseCase,
  GetAllUsersUseCase,
  GetUserUseCase,
  SignInUserUseCase,
  UpdateUserUseCase,
  //user - preference
  GetUserPreferencesUseCase,
  PatchUserPreferenceFcmTokenUseCase,
  PatchUserPreferenceWeeklyWorkActivityUseCase,
  PatchUserPreferenceWeeklyStretchActivityUseCase,
  PatchUserPreferenceFixedStartTimeUseCase,
  PatchUserPreferenceFixedStartPeriodUseCase,
  PatchUserPreferenceGoalUseCase,
  PatchUserPreferenceNotificationUseCase,
  //group
  GetAllGroupsUseCase,
  GetGroupByIdUseCase,
  AddGroupUseCase,
  UpdateGroupUseCase,
  DeleteGroupUseCase,
  //user - group
  GetGroupsByUserIdUseCase,
  AddUserGroupUseCase,
  UpdateUserGroupUseCase,
  DeleteUserGroupUseCase,
} from '../../../application/use-cases/user'

class UserControllerComposer {
  static compose() {
    const userRepository = new UserRepository()
    const gameRepository = new GameRepository()
    const timerServiceFacade = new TimerServiceFacade()
    const analyticsServiceFacade = new AnalyticsServiceFacade()
    const ipWhoIsFacade = new IpWhoIsFacade()

    //core
    const getAllUsersUseCase = new GetAllUsersUseCase({ userRepository })
    const getUserUseCase = new GetUserUseCase({ userRepository })
    const signInUserUseCase = new SignInUserUseCase({
      userRepository,
      timerServiceFacade,
      analyticsServiceFacade,
      ipWhoIsFacade,
    })
    const updateUserUseCase = new UpdateUserUseCase({ userRepository })
    const deleteUserUseCase = new DeleteUserUseCase({
      userRepository,
      timerServiceFacade,
    })

    //user - preference
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
    const patchUserPreferenceNotificationUseCase = new PatchUserPreferenceNotificationUseCase(
      {
        userRepository,
        timerServiceFacade,
      }
    )

    //group
    const getAllGroupsUseCase = new GetAllGroupsUseCase({
      userRepository,
      gameRepository,
    })
    const getGroupByIdUseCase = new GetGroupByIdUseCase({
      userRepository,
      gameRepository,
    })
    const addGroupUseCase = new AddGroupUseCase({ userRepository })
    const updateGroupUseCase = new UpdateGroupUseCase({ userRepository })
    const deleteGroupUseCase = new DeleteGroupUseCase({ userRepository })

    //user - group
    const getGroupsByUserIdUseCase = new GetGroupsByUserIdUseCase({
      userRepository,
      gameRepository,
    })
    const addUserGroupUseCase = new AddUserGroupUseCase({ userRepository })
    const updateUserGroupUseCase = new UpdateUserGroupUseCase({
      userRepository,
    })
    const deleteUserGroupUseCase = new DeleteUserGroupUseCase({
      userRepository,
    })

    return new UserController({
      //core
      getAllUsersUseCase,
      getUserUseCase,
      signInUserUseCase,
      updateUserUseCase,
      deleteUserUseCase,
      //user - preference
      getUserPreferencesUseCase,
      patchUserPreferenceFcmTokenUseCase,
      patchUserPreferenceWeeklyWorkActivityUseCase,
      patchUserPreferenceWeeklyStretchActivityUseCase,
      patchUserPreferenceFixedStartTimeUseCase,
      patchUserPreferenceFixedStartPeriodUseCase,
      patchUserPreferenceGoalUseCase,
      patchUserPreferenceNotificationUseCase,
      //group
      getAllGroupsUseCase,
      getGroupByIdUseCase,
      addGroupUseCase,
      updateGroupUseCase,
      deleteGroupUseCase,
      //user - group
      getGroupsByUserIdUseCase,
      addUserGroupUseCase,
      updateUserGroupUseCase,
      deleteUserGroupUseCase,
    })
  }
}

export default UserControllerComposer
