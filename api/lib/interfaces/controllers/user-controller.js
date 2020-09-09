import HttpResponse from '../core/http-response'
import { use } from 'chai'

class UserController {
  constructor(useCases) {
    this.useCases = useCases
  }

  async getAllUsers(_req) {
    try {
      const { getAllUsersUseCase } = this.useCases
      const users = await getAllUsersUseCase.execute()

      if (users.length == 0) {
        return HttpResponse.ok({ message: 'No users found' })
      } else {
        return HttpResponse.ok({ message: 'Users retrieved', users })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async updateUser(req) {
    const { name } = req.body
    const { userId } = req.props
    if (!name) {
      return HttpResponse.badRequest('Please provide the fields to be updated')
    }
    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { updateUserUseCase } = this.useCases
      const user = await updateUserUseCase.execute(userId, { name })

      if (!user) {
        return HttpResponse.ok({ message: 'Cannot find user to update' })
      } else {
        return HttpResponse.ok({ message: 'User successfully updated', user })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async getUser(req) {
    const { userId } = req.props
    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { getUserUseCase } = this.useCases
      const user = await getUserUseCase.execute(userId)

      if (!user) {
        return HttpResponse.ok({ message: 'Cannot find user' })
      } else {
        return HttpResponse.ok({ message: 'User retrieved', user })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async deleteUser(req) {
    const { userId } = req.props
    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { deleteUserUseCase } = this.useCases
      const user = await deleteUserUseCase.execute(userId)

      if (!user) {
        return HttpResponse.ok({ message: 'User does not exist', userId })
      } else {
        return HttpResponse.ok({ message: 'User deleted', userId })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async patchUserFcmToken(req) {
    const { fcmToken } = req.body
    const { userId } = req.props

    if (!fcmToken) {
      return HttpResponse.badRequest(
        'Please provide the fcmToken to be patched'
      )
    }

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { patchUserFcmTokenUseCase } = this.useCases

      const user = await patchUserFcmTokenUseCase.execute(userId, fcmToken)

      if (!user) {
        return HttpResponse.ok({ message: 'Cannot find user to patch' })
      } else {
        return HttpResponse.ok({ message: 'User successfully patched', user })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async signInUser(req) {
    const { name, email } = req.body
    const { userId } = req.props
    if (!name) {
      return HttpResponse.badRequest('Please provide user name')
    }
    if (!email) {
      return HttpResponse.badRequest('Please provide email')
    }
    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { signInUserUseCase } = this.useCases
      const user = await signInUserUseCase.execute({
        userId: userId,
        email: email,
        name: name,
      })

      return HttpResponse.ok({ message: 'User logged in', user })
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async getUserPreferences(req) {
    const { userId } = req.props

    try {
      const { getUserUseCase } = this.useCases
      const user = await getUserUseCase.execute(userId)

      if (!user) {
        return HttpResponse.serverError()
      }

      const { getUserPreferencesUseCase } = this.useCases
      const preferences = await getUserPreferencesUseCase.execute(userId)

      if (!preferences || preferences.length == 0) {
        return HttpResponse.ok({ message: 'No user preferences found' })
      } else {
        return HttpResponse.ok({
          message: 'User preferences retrieved',
          preferences,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async patchUserPreferenceWeeklyWorkActivity(req) {
    const { userId } = req.props
    const {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    } = req.body

    try {
      const { patchUserPreferenceWeeklyWorkActivityUseCase } = this.useCases
      const userPreferenceWeeklyWorkActivity = await patchUserPreferenceWeeklyWorkActivityUseCase.execute(
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

      if (!userPreferenceWeeklyWorkActivity) {
        return HttpResponse.ok({
          message: 'Cannot find user preference to patch',
        })
      } else {
        return HttpResponse.ok({
          message: 'User preference weekly work activity successfully patched',
          userPreferenceWeeklyWorkActivity,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async patchUserPreferenceWeeklyStretchActivity(req) {
    const { userId } = req.props
    const {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    } = req.body

    try {
      const { patchUserPreferenceWeeklyStretchActivityUseCase } = this.useCases
      const userPreferenceWeeklyStretchActivity = await patchUserPreferenceWeeklyStretchActivityUseCase.execute(
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

      if (!userPreferenceWeeklyStretchActivity) {
        return HttpResponse.ok({
          message: 'Cannot find user preference to patch',
        })
      } else {
        return HttpResponse.ok({
          message:
            'User preference weekly stretch activity successfully patched',
          userPreferenceWeeklyStretchActivity,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async patchUserGoal(req) {
    const { userId } = req.props
    const { criticalPain, painFromWork, futurePain } = req.body

    try {
      const { patchUserGoalUseCase } = this.useCases
      const userPreferenceGoal = await patchUserGoalUseCase.execute(userId, {
        criticalPain,
        painFromWork,
        futurePain,
      })

      if (!userPreferenceGoal) {
        return HttpResponse.ok({
          message: 'Cannot find user preference to patch',
        })
      } else {
        return HttpResponse.ok({
          message: 'User preference goal successfully patched',
          userPreferenceGoal,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async patchUserPreferenceFixedStartTime(req) {
    const { userId } = req.props
    const { startTime } = req.body

    if (!startTime) {
      return HttpResponse.badRequest('Please provide start time')
    }

    try {
      const { patchUserPreferenceFixedStartTimeUseCase } = this.useCases
      const preferences = await patchUserPreferenceFixedStartTimeUseCase.execute(
        userId,
        startTime
      )

      if (!preferences) {
        return HttpResponse.ok({
          message: 'Cannot find user preference to patch',
        })
      } else {
        return HttpResponse.ok({
          message: 'User preference start time type successfully patched',
          preferences,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async patchUserPreferenceFixedStartPeriod(req) {
    const { userId } = req.props
    const { startPeriodId } = req.body

    if (!startPeriodId) {
      return HttpResponse.badRequest('Please provide start period id')
    }

    try {
      const { patchUserPreferenceFixedStartPeriodUseCase } = this.useCases
      const preferences = await patchUserPreferenceFixedStartPeriodUseCase.execute(
        userId,
        startPeriodId
      )

      if (!preferences) {
        return HttpResponse.ok({
          message: 'Cannot find user preference to patch',
        })
      } else {
        return HttpResponse.ok({
          message: 'User preference start time type successfully patched',
          preferences,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async patchUserPreferenceCycleDuration(req) {
    const { userId } = req.props
    const { workDuration, breakDuration } = req.body

    try {
      const { patchUserPreferenceCycleDurationUseCase } = this.useCases
      const preferences = await patchUserPreferenceCycleDurationUseCase.execute(
        userId,
        workDuration,
        breakDuration
      )

      if (!preferences) {
        return HttpResponse.ok({
          message: 'Cannot find user preference to patch',
        })
      } else {
        return HttpResponse.ok({
          message: 'User preference cycle duration successfully patched',
          preferences,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }
}

export default UserController
