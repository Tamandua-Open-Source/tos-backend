import ClientError from '../../interfaces/core/client-error'
import db from '../orm/models'
import { Op } from 'sequelize'

class UserRepository {
  //user
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

    const stretchMovementRelations = await db.UserStretchMovement.findAll({
      where: {
        UserId: userId,
      },
    })
    stretchMovementRelations.forEach((relation) => relation.destroy())

    const stretchSessionRelations = await db.UserStretchSession.findAll({
      where: {
        UserId: userId,
      },
    })
    stretchSessionRelations.forEach((relation) => relation.destroy())

    const stretchChallengeRelations = await db.UserStretchChallenge.findAll({
      where: {
        UserId: userId,
      },
    })
    stretchChallengeRelations.forEach((relation) => relation.destroy())

    return await user.destroy()
  }

  //user preference
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

  //group
  async getAllGroups() {
    return await db.Group.findAll({
      attributes: ['id', 'name', 'OwnerId', 'isPublic'],
    })
  }
  async getGroupById(groupId) {
    return await db.Group.findOne({
      where: {
        id: groupId,
      },
      attributes: ['id', 'name', 'OwnerId', 'isPublic'],
    })
  }
  async createGroup(group) {
    const user = await db.User.findOne({
      where: {
        id: group.OwnerId,
      },
    })

    if (!user) throw ClientError.notFound('User Not Found')

    const newGroup = await db.Group.create(group)

    await this.addUserGroup(newGroup.OwnerId, newGroup.id, true)

    return newGroup
  }
  async updateGroup(groupId, updatedFields) {
    const group = await db.Group.findOne({
      where: {
        id: groupId,
      },
    })

    if (!group) throw ClientError.notFound('Group Not Found')

    return await group.update(updatedFields)
  }
  async deleteGroup(groupId) {
    const group = await db.Group.findOne({
      where: {
        id: groupId,
      },
    })

    if (!group) throw ClientError.notFound()

    const userRelations = await db.UserGroup.findAll({
      where: {
        GroupId: groupId,
      },
    })
    userRelations.forEach((relation) => relation.destroy())

    return await group.destroy()
  }

  //user - group
  async getGroupsByUserId(userId) {
    const relations = await db.UserGroup.findAll({
      where: {
        UserId: userId,
      },
    })

    const groupIdList = relations.map((relation) => relation.GroupId)

    return await db.Group.findAll({
      where: {
        id: {
          [Op.in]: groupIdList,
        },
      },
      attributes: ['id', 'name', 'OwnerId', 'isPublic'],
    })
  }
  async getUserGroupsByUserId(userId) {
    return await db.UserGroup.findAll({
      where: {
        UserId: userId,
      },
    })
  }
  async getUserGroupByUserIdAndGroupId(userId, groupId) {
    return await db.UserGroup.findOne({
      where: {
        UserId: userId,
        GroupId: groupId,
      },
    })
  }
  async addUserGroup(userId, groupId, admin = false) {
    const user = await db.User.findOne({
      where: {
        id: userId,
      },
    })

    if (!user) throw ClientError.notFound('User Not Found')

    const group = await db.Group.findOne({
      where: {
        id: groupId,
      },
    })

    if (!group) throw ClientError.notFound('Group Not Found')

    const relation = await db.UserGroup.findOne({
      where: {
        UserId: userId,
        GroupId: groupId,
      },
    })

    if (relation) return null

    return await db.UserGroup.create({
      UserId: userId,
      GroupId: groupId,
      admin,
    })
  }
  async updateUserGroup(userId, groupId, updatedFields) {
    const relation = await db.UserGroup.findOne({
      where: {
        UserId: userId,
        GroupId: groupId,
      },
    })

    if (!relation) throw ClientError.notFound('User Group Not Found')

    return await relation.update(updatedFields)
  }
  async deleteUserGroup(userId, groupId) {
    const relation = await db.UserGroup.findOne({
      where: {
        UserId: userId,
        GroupId: groupId,
      },
    })

    if (!relation) return null

    return await relation.destroy()
  }
}

export default UserRepository
