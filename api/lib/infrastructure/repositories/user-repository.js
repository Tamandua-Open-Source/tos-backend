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
    const user = await this.getUserById(userId)

    if (user) {
      return await user.update({ fcmToken })
    }

    return null
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
      attributes: ['startTime', 'breakDuration', 'workDuration'],
      include: [
        {
          model: db.UserPreferenceWeeklyStretchActivity,
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
          id: preference.id,
        },
      }
    )

    const weeklyWorkActivity = await db.UserPreferenceWeeklyWorkActivity.findOne(
      {
        where: {
          id: preference.id,
        },
      }
    )

    await weeklyStretchActivity.destroy()
    await weeklyWorkActivity.destroy()

    return await preference.destroy()
  }
}

export default UserRepository
