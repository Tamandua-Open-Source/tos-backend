import ClientError from '../../interfaces/core/client-error'
import db from '../orm/models'
import { Op } from 'sequelize'

class GameRepository {
  //achievements
  async getAllAchievements() {
    return await db.Achievement.findAll({
      attributes: [
        'id',
        'name',
        'requirement',
        'xp',
        'badgeImageUrl',
        'iconImageUrl',
      ],
      include: [
        {
          model: db.GameAction,
          attributes: ['id', 'name', 'xp'],
          include: [
            {
              model: db.GameActionType,
              attributes: ['id', 'name'],
            },
          ],
        },
      ],
    })
  }
  async getAchievementById({ achievementId }) {
    const achievement = await db.Achievement.findOne({
      where: {
        id: achievementId,
      },
      attributes: ['id', 'name', 'xp'],
    })

    if (!achievement) throw ClientError.notFound('Achievement Not Found')

    return achievement
  }

  //level
  async getAllLevels() {
    return await db.Level.findAll({
      attributes: ['id', 'xp'],
    })
  }

  //game action
  async getAllGameActions() {
    return await db.GameAction.findAll({
      attributes: ['id', 'name', 'xp'],
      include: [
        {
          model: db.GameActionType,
          attributes: ['id', 'name'],
        },
      ],
    })
  }

  //user game action
  async getGameActionsByUserId({ userId }) {
    const user = await db.User.findOne({
      where: {
        id: userId,
      },
      attributes: [],
      include: [
        {
          model: db.GameAction,
          attributes: ['id', 'name', 'xp'],
          through: {
            attributes: ['counter'],
          },
          include: [
            {
              model: db.Achievement,
              attributes: [
                'id',
                'name',
                'requirement',
                'xp',
                'badgeImageUrl',
                'iconImageUrl',
              ],
            },
          ],
        },
      ],
    })

    if (!user) throw ClientError.notFound()
    if (!user.GameActions) return []
    return user.GameActions
  }
  async getUserGameActionsByUserId({ userId }) {
    return await db.UserGameAction.findAll({
      where: {
        UserId: userId,
      },
    })
  }
  async addUserGameAction({ userId, gameActionId }) {
    const user = await db.User.findOne({
      where: {
        id: userId,
      },
    })
    if (!user) throw ClientError.notFound('User Not Found')

    const gameAction = await db.GameAction.findOne({
      where: {
        id: gameActionId,
      },
    })
    if (!gameAction) throw ClientError.notFound('Game Action Not Found')

    const relation = await db.UserGameAction.findOne({
      where: {
        UserId: userId,
        GameActionId: gameActionId,
      },
    })

    if (relation) {
      return await relation.update({
        counter: parseInt(relation.counter) + 1,
      })
    }

    return await db.UserGameAction.create({
      UserId: userId,
      GameActionId: gameActionId,
      counter: 1,
    })
  }
}

export default GameRepository
