import HttpResponse from '../core/http-response'

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
    const { name, email } = req.body
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { getUserUseCase } = this.useCases
      const availableUser = await getUserUseCase.execute(userId)

      if (!availableUser) {
        return HttpResponse.unauthorizedError()
      }

      const { updateUserUseCase } = this.useCases
      const user = await updateUserUseCase.execute(userId, { name, email })

      if (!user) {
        return HttpResponse.serverError()
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
        return HttpResponse.unauthorizedError()
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
      const { getUserUseCase } = this.useCases
      const availableUser = await getUserUseCase.execute(userId)

      if (!availableUser) {
        return HttpResponse.unauthorizedError()
      }

      const { deleteUserUseCase } = this.useCases
      const user = await deleteUserUseCase.execute(userId)

      if (!user) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({ message: 'User deleted', userId })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async signInUser(req) {
    const { name, email } = req.body
    const { userId } = req.props

    if (!name || !email) {
      return HttpResponse.badRequest('Please provide complete details')
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

      if (!user) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({ message: 'User logged in', user })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async getUserPreferences(req) {
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { getUserUseCase } = this.useCases
      const availableUser = await getUserUseCase.execute(userId)

      if (!availableUser) {
        return HttpResponse.unauthorizedError()
      }

      const { getUserPreferencesUseCase } = this.useCases
      const preferences = await getUserPreferencesUseCase.execute(userId)

      if (!preferences) {
        return HttpResponse.serverError()
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

  async patchUserPreferenceFcmToken(req) {
    const { fcmToken } = req.body
    const { userId } = req.props

    if (!fcmToken) {
      return HttpResponse.badRequest('Please provide complete details')
    }

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { getUserUseCase } = this.useCases
      const availableUser = await getUserUseCase.execute(userId)

      if (!availableUser) {
        return HttpResponse.unauthorizedError()
      }

      const { patchUserPreferenceFcmTokenUseCase } = this.useCases
      const preferences = await patchUserPreferenceFcmTokenUseCase.execute(
        userId,
        fcmToken
      )

      if (!preferences) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({
          message: 'User Preferences successfully patched',
          preferences,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
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

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { getUserUseCase } = this.useCases
      const availableUser = await getUserUseCase.execute(userId)

      if (!availableUser) {
        return HttpResponse.unauthorizedError()
      }

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
        return HttpResponse.serverError()
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

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { getUserUseCase } = this.useCases
      const availableUser = await getUserUseCase.execute(userId)

      if (!availableUser) {
        return HttpResponse.unauthorizedError()
      }

      const { patchUserPreferenceWeeklyStretchActivityUseCase } = this.useCases
      const userPreferenceWeeklyStretchActivity = await patchUserPreferenceWeeklyStretchActivityUseCase.execute(
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

      if (!userPreferenceWeeklyStretchActivity) {
        return HttpResponse.serverError()
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

  async patchUserPreferenceGoal(req) {
    const { criticalPain, painFromWork, futurePain } = req.body
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { getUserUseCase } = this.useCases
      const availableUser = await getUserUseCase.execute(userId)

      if (!availableUser) {
        return HttpResponse.unauthorizedError()
      }

      const { patchUserPreferenceGoalUseCase } = this.useCases
      const userPreferenceGoal = await patchUserPreferenceGoalUseCase.execute(
        userId,
        {
          criticalPain,
          painFromWork,
          futurePain,
        }
      )

      if (!userPreferenceGoal) {
        return HttpResponse.serverError()
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
    const { startTime } = req.body
    const { userId } = req.props

    if (!startTime) {
      return HttpResponse.badRequest('Please provide start time')
    }

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { getUserUseCase } = this.useCases
      const availableUser = await getUserUseCase.execute(userId)

      if (!availableUser) {
        return HttpResponse.unauthorizedError()
      }

      const { patchUserPreferenceFixedStartTimeUseCase } = this.useCases
      const preferences = await patchUserPreferenceFixedStartTimeUseCase.execute(
        userId,
        startTime
      )

      if (!preferences) {
        return HttpResponse.serverError()
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
    const { startPeriodId } = req.body
    const { userId } = req.props

    if (!startPeriodId) {
      return HttpResponse.badRequest('Please provide start period id')
    }

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { getUserUseCase } = this.useCases
      const availableUser = await getUserUseCase.execute(userId)

      if (!availableUser) {
        return HttpResponse.unauthorizedError()
      }

      const { patchUserPreferenceFixedStartPeriodUseCase } = this.useCases
      const preferences = await patchUserPreferenceFixedStartPeriodUseCase.execute(
        userId,
        startPeriodId
      )

      if (!preferences) {
        return HttpResponse.serverError()
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
    const { workDuration, breakDuration } = req.body
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { getUserUseCase } = this.useCases
      const availableUser = await getUserUseCase.execute(userId)

      if (!availableUser) {
        return HttpResponse.unauthorizedError()
      }

      const { patchUserPreferenceCycleDurationUseCase } = this.useCases
      const preferences = await patchUserPreferenceCycleDurationUseCase.execute(
        userId,
        workDuration,
        breakDuration
      )

      if (!preferences) {
        return HttpResponse.serverError()
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
