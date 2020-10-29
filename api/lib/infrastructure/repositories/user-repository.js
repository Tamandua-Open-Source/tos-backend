import db from '../orm/models'

class UserRepository {
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
    const user = await db.User.create(domainUser)

    if (!user) {
      return null
    }

    await this.createUserPreferences(user.id)
    return user
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

    if (!user) {
      return null
    }

    await this.deleteUserPreferences(userId)
    return await user.destroy()
  }

  async getUserPreferences(userId) {
    return await db.UserPreference.findOne({
      where: {
        UserId: userId,
      },
      attributes: ['fcmToken', 'startTime'],
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
    const preferences = await db.UserPreference.create({
      UserId: userId,
      UserPreferenceTimeTypeId: 2,
      UserPreferenceStartPeriodId: 1,
      fcmToken: null,
      startTime: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    if (!preferences) {
      return null
    }

    await db.UserPreferenceWeeklyStretchActivity.create({
      UserPreferenceId: preferences.id,
      startTime: new Date(),
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
      UserPreferenceId: preferences.id,
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
      UserPreferenceId: preferences.id,
      criticalPain: false,
      painFromWork: false,
      futurePain: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return preferences
  }

  async deleteUserPreferences(userId) {
    const preferences = await db.UserPreference.findOne({
      where: {
        UserId: userId,
      },
    })

    if (!preferences) {
      return null
    }

    await db.UserPreferenceWeeklyStretchActivity.destroy({
      where: {
        UserPreferenceId: preferences.id,
      },
    })

    await db.UserPreferenceWeeklyWorkActivity.destroy({
      where: {
        UserPreferenceId: preferences.id,
      },
    })

    await db.UserPreferenceGoal.destroy({
      where: {
        UserPreferenceId: preferences.id,
      },
    })

    return await preferences.destroy()
  }

  async patchUserPreferenceFcmToken(userId, fcmToken) {
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

  async patchUserPreferenceGoal(userId, updatedFields) {
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
