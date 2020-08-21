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

    if (user) {
      return db.UserPreference.findOne({
        where: {
          UserId: userId,
        },
        attributes: ['startTime', 'breakDuration', 'nextBreak'],
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

    return null
  }
}

export default UserRepository
