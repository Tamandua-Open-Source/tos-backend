import HttpResponse from '../core/http-response'
import ServerError from '../core/server-error'
import ClientError from '../core/client-error'

class UserController {
  constructor(useCases) {
    this.useCases = useCases
  }

  //core
  async getAllUsers(_req) {
    const { getAllUsersUseCase } = this.useCases
    const users = await getAllUsersUseCase.execute()

    if (!users)
      return HttpResponse.accepted({ message: 'Cannot Retrieve Users' })

    return HttpResponse.ok({ message: 'Users Retrieved', users })
  }
  async updateUser(req) {
    const { name, email } = req.body
    const { userId } = req.props

    if (!userId) throw ServerError.internal()

    const { getUserUseCase } = this.useCases
    const availableUser = await getUserUseCase.execute(userId)

    if (!availableUser) throw ClientError.notFound('User Not Found')

    const { updateUserUseCase } = this.useCases
    const user = await updateUserUseCase.execute(userId, { name, email })

    if (!user) throw ClientError.notFound('User Not Found')

    return HttpResponse.ok({ message: 'User Successfully Updated', user })
  }
  async getUser(req) {
    const { userId } = req.props

    if (!userId) throw ServerError.internal()

    const { getUserUseCase } = this.useCases
    const user = await getUserUseCase.execute(userId)

    if (!user) throw ClientError.notFound('User Not Found')

    return HttpResponse.ok({ message: 'User Retrieved', user })
  }
  async deleteUser(req) {
    const { userId, idToken } = req.props

    if (!userId) throw ServerError.internal()

    const { getUserUseCase } = this.useCases
    const availableUser = await getUserUseCase.execute(userId)

    if (!availableUser) throw ClientError.notFound('User Not Found')

    const { deleteUserUseCase } = this.useCases
    const user = await deleteUserUseCase.execute({ idToken, userId })

    if (!user) return HttpResponse.accepted({ message: 'Cannot Delete User' })

    return HttpResponse.ok({ message: 'User Deleted', userId })
  }
  async signInUser(req) {
    const { userId, idToken, name, email, photoUrl } = req.props
    let { ip } = req.ipInfo

    if (ip == '::1') {
      ip = '192.168.0.1'
    }

    if (!userId) throw ServerError.internal()

    const { signInUserUseCase } = this.useCases
    const user = await signInUserUseCase.execute({
      idToken,
      userId,
      email,
      name,
      photoUrl,
      ip,
    })

    if (!user) throw ServerError.internal()

    return HttpResponse.ok({ message: 'User Signed In', user })
  }

  //user - preference
  async getUserPreferences(req) {
    const { userId } = req.props

    if (!userId) throw ServerError.internal()

    const { getUserUseCase } = this.useCases
    const availableUser = await getUserUseCase.execute(userId)

    if (!availableUser) throw ClientError.notFound('User Not Found')

    const { getUserPreferencesUseCase } = this.useCases
    const preferences = await getUserPreferencesUseCase.execute(userId)

    if (!preferences) throw ClientError.notFound('User Preferences Not Found')

    return HttpResponse.ok({
      message: 'User Preferences Retrieved',
      preferences,
    })
  }
  async patchUserPreferenceFcmToken(req) {
    const { fcmToken } = req.body
    const { userId, idToken } = req.props

    if (!fcmToken)
      throw ClientError.badRequest("Missing 'fcmToken' Body Parameter")

    if (!userId) throw ServerError.internal()

    const { getUserUseCase } = this.useCases
    const availableUser = await getUserUseCase.execute(userId)

    if (!availableUser) throw ClientError.notFound('User Not Found')

    const { patchUserPreferenceFcmTokenUseCase } = this.useCases
    const preferences = await patchUserPreferenceFcmTokenUseCase.execute({
      fcmToken: fcmToken,
      userId: userId,
      idToken: idToken,
    })

    if (!preferences) throw ClientError.notFound('User Preferences Not Found')

    return HttpResponse.ok({
      message: 'User Preferences Successfully Patched',
      preferences,
    })
  }
  async patchUserPreferenceWeeklyWorkActivity(req) {
    const {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    } = req.body
    const { userId } = req.props

    if (!userId) throw ServerError.internal()

    const { getUserUseCase } = this.useCases
    const availableUser = await getUserUseCase.execute(userId)

    if (!availableUser) throw ClientError.notFound('User Not Found')

    const { patchUserPreferenceWeeklyWorkActivityUseCase } = this.useCases
    const preferences = await patchUserPreferenceWeeklyWorkActivityUseCase.execute(
      userId,
      {
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
      }
    )

    if (!preferences) throw ClientError.notFound('User Preferences Not Found')

    return HttpResponse.ok({
      message: 'User Preferences Successfully Patched',
      preferences,
    })
  }
  async patchUserPreferenceWeeklyStretchActivity(req) {
    const {
      startTime,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    } = req.body
    const { userId } = req.props

    if (!userId) throw ServerError.internal()

    const { getUserUseCase } = this.useCases
    const availableUser = await getUserUseCase.execute(userId)

    if (!availableUser) throw ClientError.notFound('User Not Found')

    const { patchUserPreferenceWeeklyStretchActivityUseCase } = this.useCases
    const preferences = await patchUserPreferenceWeeklyStretchActivityUseCase.execute(
      userId,
      {
        startTime,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
      }
    )

    if (!preferences) throw ClientError.notFound('User Preferences Not Found')

    return HttpResponse.ok({
      message: 'User Preferences Successfully Patched',
      preferences,
    })
  }
  async patchUserPreferenceGoal(req) {
    const { criticalPain, painFromWork, futurePain } = req.body
    const { userId } = req.props

    if (!userId) throw ServerError.internal()

    const { getUserUseCase } = this.useCases
    const availableUser = await getUserUseCase.execute(userId)

    if (!availableUser) throw ClientError.notFound('User Not Found')

    const { patchUserPreferenceGoalUseCase } = this.useCases
    const preferences = await patchUserPreferenceGoalUseCase.execute(userId, {
      criticalPain,
      painFromWork,
      futurePain,
    })

    if (!preferences) throw ClientError.notFound('User Preferences Not Found')

    return HttpResponse.ok({
      message: 'User Preferences Successfully Patched',
      preferences,
    })
  }
  async patchUserPreferenceFixedStartTime(req) {
    const { startTime } = req.body
    const { userId, idToken } = req.props

    if (!startTime)
      throw ClientError.badRequest("Missing 'startTime' Body Parameter")

    if (!userId) throw ServerError.internal()

    const { getUserUseCase } = this.useCases
    const availableUser = await getUserUseCase.execute(userId)

    if (!availableUser) throw ClientError.notFound('User Not Found')

    const { patchUserPreferenceFixedStartTimeUseCase } = this.useCases
    const preferences = await patchUserPreferenceFixedStartTimeUseCase.execute({
      idToken: idToken,
      userId: userId,
      startTime: startTime,
    })

    if (!preferences) throw ClientError.notFound('User Preferences Not Found')

    return HttpResponse.ok({
      message: 'User Preferences Successfully Patched',
      preferences,
    })
  }
  async patchUserPreferenceFixedStartPeriod(req) {
    const { startPeriodId } = req.body
    const { userId, idToken } = req.props

    if (!startPeriodId)
      throw ClientError.badRequest("Missing 'startPeriodId' Body Parameter")

    if (!userId) throw ServerError.internal()

    const { getUserUseCase } = this.useCases
    const availableUser = await getUserUseCase.execute(userId)

    if (!availableUser) throw ClientError.notFound('User Not Found')

    const { patchUserPreferenceFixedStartPeriodUseCase } = this.useCases
    const preferences = await patchUserPreferenceFixedStartPeriodUseCase.execute(
      {
        idToken: idToken,
        userId: userId,
        startPeriodId: startPeriodId,
      }
    )

    if (!preferences) throw ClientError.notFound('User Preferences Not Found')

    return HttpResponse.ok({
      message: 'User Preferences Successfully Patched',
      preferences,
    })
  }
  async patchUserPreferenceNotification(req) {
    const {
      allowTimerNotifications,
      allowWorkoutNotifications,
      allowGeneralNotifications,
    } = req.body
    const { userId, idToken } = req.props

    if (!userId) throw ServerError.internal()

    const { getUserUseCase } = this.useCases
    const availableUser = await getUserUseCase.execute(userId)

    if (!availableUser) throw ClientError.notFound('User Not Found')

    const { patchUserPreferenceNotificationUseCase } = this.useCases
    const preferences = await patchUserPreferenceNotificationUseCase.execute({
      idToken,
      userId,
      allowTimerNotifications,
      allowWorkoutNotifications,
      allowGeneralNotifications,
    })

    if (!preferences) throw ClientError.notFound('User Preferences Not Found')

    return HttpResponse.ok({
      message: 'User Preferences Successfully Patched',
      preferences,
    })
  }

  //group
  async getAllGroups(_req) {
    const { getAllGroupsUseCase } = this.useCases
    const groups = await getAllGroupsUseCase.execute()

    if (!groups) throw ServerError.internal()

    return HttpResponse.ok({
      message: 'Groups Retrieved',
      groups,
    })
  }
  async getGroupById(req) {
    const { groupId } = req.params

    if (!groupId)
      throw ClientError.badRequest("Missing 'groupId' Path Parameter")

    const { getGroupByIdUseCase } = this.useCases
    const group = await getGroupByIdUseCase.execute({
      groupId,
    })

    if (!group) throw ClientError.notFound('Group Not Found')

    return HttpResponse.ok({
      message: 'Group Retrieved',
      group,
    })
  }
  async addGroup(req) {
    const { userId } = req.props
    const { name, isPublic } = req.body

    const { addGroupUseCase } = this.useCases
    const group = await addGroupUseCase.execute({
      userId,
      name,
      isPublic,
    })

    if (!group)
      return HttpResponse.accepted({
        message: 'Cannot Create Group',
      })

    return HttpResponse.created({
      message: 'Group Created',
      group,
    })
  }
  async updateGroup(req) {
    const { userId } = req.props
    const { groupId } = req.params
    const { name, isPublic } = req.body

    const { updateGroupUseCase } = this.useCases
    const group = await updateGroupUseCase.execute({
      userId,
      groupId,
      updatedFields: {
        name,
        isPublic,
      },
    })

    if (!group) throw ClientError.notFound('Group Not Found')

    return HttpResponse.ok({
      message: 'Group Updated',
      group,
    })
  }
  async deleteGroup(req) {
    const { userId } = req.props
    const { groupId } = req.params

    const { deleteGroupUseCase } = this.useCases
    const success = await deleteGroupUseCase.execute({
      userId,
      groupId,
    })

    if (!success) {
      return HttpResponse.accepted({
        message: 'Cannot Delete Group',
      })
    } else {
      return HttpResponse.ok({ message: 'Group Deleted' })
    }
  }

  //user - group
  async getGroupsByUserId(req) {
    const { userId } = req.props

    const { getGroupsByUserIdUseCase } = this.useCases
    const groups = await getGroupsByUserIdUseCase.execute({
      userId,
    })

    if (!groups) {
      throw ServerError.internal()
    } else {
      return HttpResponse.ok({
        message: 'Groups Retrieved',
        groups,
      })
    }
  }
  async addUserGroup(req) {
    const requesterId = req.props.userId
    const { groupId, userId } = req.params

    const { addUserGroupUseCase } = this.useCases
    const relation = await addUserGroupUseCase.execute({
      requesterId,
      userId,
      groupId,
    })

    if (!relation) {
      return HttpResponse.accepted({
        message: 'Cannot Link User And Group',
      })
    } else {
      return HttpResponse.created({
        message: 'User Linked With Group',
      })
    }
  }
  async updateUserGroup(req) {
    const requesterId = req.props.userId
    const { groupId, userId } = req.params
    const { admin } = req.body

    const { updateUserGroupUseCase } = this.useCases
    const relation = await updateUserGroupUseCase.execute({
      requesterId,
      userId,
      groupId,
      updatedFields: {
        admin,
      },
    })

    if (!relation) {
      throw ClientError.notFound()
    } else {
      return HttpResponse.ok({
        message: 'User Group Updated',
      })
    }
  }
  async deleteUserGroup(req) {
    const requesterId = req.props.userId
    const { groupId, userId } = req.params

    const { deleteUserGroupUseCase } = this.useCases
    const relation = await deleteUserGroupUseCase.execute({
      requesterId,
      userId,
      groupId,
    })

    if (!relation) {
      return HttpResponse.accepted({
        message: 'Cannot Unlink User And Group',
      })
    } else {
      return HttpResponse.ok({
        message: 'User Unlinked From Group',
      })
    }
  }
}

export default UserController
