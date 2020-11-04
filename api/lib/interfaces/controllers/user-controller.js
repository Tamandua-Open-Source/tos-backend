import HttpResponse from '../core/http-response'
import ServerError from '../core/server-error'
import ClientError from '../core/client-error'

class UserController {
  constructor(useCases) {
    this.useCases = useCases
  }

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
    const { name, email } = req.body
    const { userId, idToken } = req.props

    if (!userId) throw ServerError.internal()

    if (!name) throw ClientError.badRequest("Missing 'name' Body Parameter")
    if (!email) throw ClientError.badRequest("Missing 'email' Body Parameter")

    const { signInUserUseCase } = this.useCases
    const user = await signInUserUseCase.execute({
      idToken: idToken,
      userId: userId,
      email: email,
      name: name,
    })

    if (!user) throw ServerError.internal()

    return HttpResponse.ok({ message: 'User Signed In', user })
  }

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
}

export default UserController
