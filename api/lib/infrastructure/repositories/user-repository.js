import db from '../orm/models'
import IUserRepository from '../../application/repository-interfaces/i-user-repository'

class UserRepository extends IUserRepository {
  async getAllUsers() {
    return await db.User.findAll()
  }

  async getUserById(userId) {
    return await db.User.findOne({
      where: {
        id: userId,
      },
    })
  }

  async createUser(domainUser) {
    return await db.User.create(domainUser)
  }

  async updateUser(userId, updatedFields) {
    const user = await this.getUserById(userId)

    if (user) {
      return await user.update(updatedFields)
    }

    return null
  }

  async deleteUser(userId) {
    const user = await this.getUserById(userId)

    if (user) {
      return await user.destroy()
    }

    return null
  }

  async patchUserFcmToken(userId, fcmToken) {
    const preference = await db.UserPreference.findOne({
      where: {
        UserId: userId,
      },
      attributes: ['id'],
    })

    if (!preference) {
      return null
    }

    return await preference.update({
      fcmToken: fcmToken,
    })
  }

  async getUserPreferences(userId) {
    const user = await this.getUserById(userId)

    if (!user) {
      return null
    }

    return await db.UserPreference.findOne({
      where: {
        UserId: userId,
      },
      attributes: [
        'fcmToken',
        'startTime',
        'breakDuration',
        'breakLimitDuration',
        'breakIdleLimitDuration',
        'lastBreakStartTime',
        'workDuration',
        'workLimitDuration',
        'workIdleLimitDuration',
        'lastWorkStartTime',
        'pauseLimitDuration',
        'pauseIdleLimitDuration',
        'lastPauseStartTime',
        'currentState',
        'lastState',
      ],
      include: [
        {
          model: db.UserPreferenceWeeklyStretchActivity,
          attributes: [
            'startTime',
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday',
          ],
        },
        {
          model: db.UserPreferenceWeeklyWorkActivity,
          attributes: [
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday',
          ],
        },
        {
          model: db.UserPreferenceGoal,
          attributes: ['criticalPain', 'painFromWork', 'futurePain'],
        },
        {
          model: db.UserPreferenceTimeType,
          attributes: ['id', 'name'],
        },
        {
          model: db.UserPreferenceStartPeriod,
          attributes: ['id', 'name', 'startsAt', 'endsAt'],
        },
      ],
    })
  }

  async createUserPreferences(userId) {
    const preference = await db.UserPreference.create({
      UserId: userId,
      startTime: null,
      breakDuration: 0,
      workDuration: 0,
      UserPreferenceTimeTypeId: 2,
      UserPreferenceStartPeriodId: null,
      createAt: new Date(),
      updatedAt: new Date(),
    })

    if (!preference) {
      return null
    }

    await db.UserPreferenceWeeklyStretchActivity.create({
      UserPreferenceId: preference.id,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    await db.UserPreferenceWeeklyWorkActivity.create({
      UserPreferenceId: preference.id,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    await db.UserPreferenceGoal.create({
      UserPreferenceId: preference.id,
      criticalPain: false,
      painFromWork: false,
      futurePain: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return await this.getUserPreferences(userId)
  }

  async deleteUserPreferences(userId) {
    const user = await this.getUserById(userId)

    if (!user) {
      return null
    }

    const preference = await db.UserPreference.findOne({
      where: {
        UserId: userId,
      },
    })

    if (!preference) {
      return null
    }

    const weeklyStretchActivity = await db.UserPreferenceWeeklyStretchActivity.findOne(
      {
        where: {
          UserPreferenceId: preference.id,
        },
      }
    )

    const weeklyWorkActivity = await db.UserPreferenceWeeklyWorkActivity.findOne(
      {
        where: {
          UserPreferenceId: preference.id,
        },
      }
    )

    const goal = await db.UserPreferenceGoal.findOne({
      where: {
        UserPreferenceId: preference.id,
      },
    })

    await weeklyStretchActivity.destroy()
    await weeklyWorkActivity.destroy()
    await goal.destroy()

    return await preference.destroy()
  }

  async patchUserPreferenceWeeklyWorkActivity(userId, updatedFields) {
    const preference = await db.UserPreference.findOne({
      where: {
        UserId: userId,
      },
      attributes: ['id'],
    })

    if (!preference) {
      return null
    }

    const weeklyWorkActivity = await db.UserPreferenceWeeklyWorkActivity.findOne(
      {
        where: {
          UserPreferenceId: preference.id,
        },
      }
    )

    return weeklyWorkActivity.update(updatedFields)
  }

  async patchUserPreferenceWeeklyStretchActivity(userId, updatedFields) {
    const weeklyStretchActivityId = await db.UserPreference.findOne({
      where: {
        UserId: userId,
      },
      attributes: ['id'],
    })

    if (!weeklyStretchActivityId) {
      return null
    }

    const weeklyStretchActivity = await db.UserPreferenceWeeklyStretchActivity.findOne(
      {
        where: {
          UserPreferenceId: weeklyStretchActivityId.id,
        },
      }
    )

    return weeklyStretchActivity.update(updatedFields)
  }

  async patchUserGoal(userId, updatedFields) {
    const preference = await db.UserPreference.findOne({
      where: {
        UserId: userId,
      },
      attributes: ['id'],
    })

    if (!preference) {
      return null
    }

    const goal = await db.UserPreferenceGoal.findOne({
      where: {
        UserPreferenceId: preference.id,
      },
    })

    return goal.update(updatedFields)
  }

  async patchUserPreferenceFixedStartTime(userId, startTime) {
    const preference = await db.UserPreference.findOne({
      where: {
        UserId: userId,
      },
    })

    if (!preference) {
      return null
    }

    return await preference.update({
      startTime: startTime,
      UserPreferenceTimeTypeId: 1,
      UserPreferenceStartPeriodId: null,
    })
  }

  async patchUserPreferenceFixedStartPeriod(userId, startPeriodId) {
    const preference = await db.UserPreference.findOne({
      where: {
        UserId: userId,
      },
    })

    if (!preference) {
      return null
    }

    return await preference.update({
      startTime: null,
      UserPreferenceTimeTypeId: 2,
      UserPreferenceStartPeriodId: startPeriodId
        ? parseInt(startPeriodId)
        : undefined,
    })
  }

  async patchUserPreferenceCycleDuration(userId, workDuration, breakDuration) {
    const preference = await db.UserPreference.findOne({
      where: {
        UserId: userId,
      },
    })

    if (!preference) {
      return null
    }

    return await preference.update({
      workDuration: workDuration ? parseInt(workDuration) : undefined,
      breakDuration: breakDuration ? parseInt(breakDuration) : undefined,
    })
  }
}

export default UserRepository
