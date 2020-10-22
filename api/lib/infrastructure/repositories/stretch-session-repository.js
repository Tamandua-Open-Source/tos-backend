import db from '../orm/models'
import { Op } from 'sequelize'
import IStretchSessionRepository from '../../application/repository-interfaces/i-stretch-session-repository'

class StretchSessionRepository extends IStretchSessionRepository {
  async getAllStretchSessions() {
    return await db.StretchSession.findAll({
      attributes: ['id', 'name', 'description', 'duration', 'imageFileUrl'],
      include: [
        {
          model: db.StretchMovement,
          attributes: [
            'id',
            'name',
            'description',
            'duration',
            'imageFileUrl',
            'videoFileUrl',
          ],
          through: {
            attributes: [],
          },
          include: [
            {
              model: db.BodyPart,
              attributes: ['id', 'name'],
              through: {
                attributes: [],
              },
            },
          ],
        },
      ],
    })
  }

  async getStretchSessionById(stretchSessionId) {
    return await db.StretchSession.findOne({
      where: {
        id: stretchSessionId,
      },
      attributes: ['id', 'name', 'description', 'duration', 'imageFileUrl'],
      include: [
        {
          model: db.StretchMovement,
          attributes: [
            'id',
            'name',
            'description',
            'duration',
            'imageFileUrl',
            'videoFileUrl',
          ],
          through: {
            attributes: [],
          },
          include: [
            {
              model: db.BodyPart,
              attributes: ['id', 'name'],
              through: {
                attributes: [],
              },
            },
          ],
        },
      ],
    })
  }

  async getStretchMovementByBodyPartId(bodyPartId) {
    const relations = await db.StretchMovementBodyPart.findAll({
      where: {
        BodyPartId: bodyPartId,
      },
    })

    const stretchMovementIdList = relations.map(
      (relation) => relation.StretchMovementId
    )

    return await db.StretchMovement.findAll({
      where: {
        id: {
          [Op.in]: stretchMovementIdList,
        },
      },
      attributes: [
        'id',
        'name',
        'description',
        'duration',
        'imageFileUrl',
        'videoFileUrl',
      ],
      include: [
        {
          model: db.BodyPart,
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
        },
      ],
    })
  }

  async getAllBodyParts() {
    return await db.BodyPart.findAll({
      attributes: ['id', 'name'],
    })
  }

  async getAllStretchChallenges() {
    return await db.StretchChallenge.findAll({
      attributes: ['id', 'name', 'description'],
      include: [
        {
          model: db.StretchSession,
          attributes: ['id', 'name', 'description', 'duration', 'imageFileUrl'],
          through: {
            attributes: [],
          },
          include: [
            {
              model: db.StretchMovement,
              attributes: [
                'id',
                'name',
                'description',
                'duration',
                'imageFileUrl',
                'videoFileUrl',
              ],
              through: {
                attributes: [],
              },
              include: [
                {
                  model: db.BodyPart,
                  attributes: ['id', 'name'],
                  through: {
                    attributes: [],
                  },
                },
              ],
            },
          ],
        },
      ],
    })
  }

  async getStretchChallengeById(stretchChallengeId) {
    return await db.StretchChallenge.findOne({
      where: {
        id: stretchChallengeId,
      },
      attributes: ['id', 'name', 'description'],
      include: [
        {
          model: db.StretchSession,
          attributes: ['id', 'name', 'description', 'duration', 'imageFileUrl'],
          through: {
            attributes: [],
          },
          include: [
            {
              model: db.StretchMovement,
              attributes: [
                'id',
                'name',
                'description',
                'duration',
                'imageFileUrl',
                'videoFileUrl',
              ],
              through: {
                attributes: [],
              },
              include: [
                {
                  model: db.BodyPart,
                  attributes: ['id', 'name'],
                  through: {
                    attributes: [],
                  },
                },
              ],
            },
          ],
        },
      ],
    })
  }

  async getStretchChallengesByUserId(userId) {
    const relations = await db.UserStretchChallenge.findAll({
      where: {
        UserId: userId,
      },
    })

    const stretchChallengeIdList = relations.map(
      (relation) => relation.StretchChallengeId
    )

    return await db.StretchChallenge.findAll({
      where: {
        id: {
          [Op.in]: stretchChallengeIdList,
        },
      },
      attributes: ['id', 'name', 'description'],
      include: [
        {
          model: db.StretchSession,
          attributes: ['id', 'name', 'description', 'duration', 'imageFileUrl'],
          through: {
            attributes: [],
          },
          include: [
            {
              model: db.StretchMovement,
              attributes: [
                'id',
                'name',
                'description',
                'duration',
                'imageFileUrl',
                'videoFileUrl',
              ],
              through: {
                attributes: [],
              },
              include: [
                {
                  model: db.BodyPart,
                  attributes: ['id', 'name'],
                  through: {
                    attributes: [],
                  },
                },
              ],
            },
          ],
        },
      ],
    })
  }

  async getUserStretchChallengesByUserId(userId) {
    return await db.UserStretchChallenge.findAll({
      where: {
        UserId: userId,
      },
    })
  }

  async addUserStretchChallenge(userId, stretchChallengeId) {
    const user = await db.User.findOne({
      where: {
        id: userId,
      },
    })

    if (!user) return null

    const stretchChallenge = await db.StretchChallenge.findOne({
      where: {
        id: stretchChallengeId,
      },
    })

    if (!stretchChallenge) return null

    const currentUserStretchChallenge = await db.UserStretchChallenge.findOne({
      where: {
        UserId: userId,
        StretchChallengeId: stretchChallengeId,
      },
    })

    if (currentUserStretchChallenge) return null

    return await db.UserStretchChallenge.create({
      UserId: userId,
      StretchChallengeId: stretchChallengeId,
      progress: 0,
    })
  }

  async deleteUserStretchChallenge(userId, stretchChallengeId) {
    const relation = await db.UserStretchChallenge.findOne({
      UserId: userId,
      StretchChallengeId: stretchChallengeId,
    })

    if (!relation) return null

    return await relation.destroy()
  }

  async updateUserStretchChallenge(userId, stretchChallengeId, progress) {
    const relation = await db.UserStretchChallenge.findOne({
      UserId: userId,
      StretchChallengeId: stretchChallengeId,
    })

    if (!relation) return null

    return await relation.update({ progress })
  }
}

export default StretchSessionRepository
