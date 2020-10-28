import db from '../orm/models'
import { Op } from 'sequelize'

class WorkoutRepository {
  //body part
  async getAllBodyParts() {
    return await db.BodyPart.findAll({
      attributes: ['id', 'name'],
    })
  }
  async getBodyPartById(bodyPartId) {
    return await db.BodyPart.findOne({
      where: {
        id: bodyPartId,
      },
      attributes: ['id', 'name'],
    })
  }
  async createBodyPart(bodyPart) {
    return await db.BodyPart.create(bodyPart)
  }
  async updateBodyPart(bodyPartId, updatedFields) {
    const bodyPart = await this.getBodyPartById(bodyPartId)

    if (!bodyPart) return null

    return await bodyPart.update(updatedFields)
  }
  async deleteBodyPart(bodyPartId) {
    const bodyPart = await this.getBodyPartById(bodyPartId)

    if (!bodyPart) return null

    const stretchMovementRelations = await db.StretchMovementBodyPart.findAll({
      where: {
        BodyPartId: bodyPartId,
      },
    })

    stretchMovementRelations.forEach((relation) => {
      relation.destroy()
    })

    return await bodyPart.destroy()
  }

  //stretch movement - body part
  async getStretchMovementsByBodyPartId(bodyPartId) {
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
  async addSretchMovementBodyPart(stretchMovementId, bodyPartId) {
    const stretchMovement = await db.StretchMovement.findOne({
      where: {
        id: stretchMovementId,
      },
    })

    if (!stretchMovement) return null

    const bodyPart = await db.BodyPart.findOne({
      where: {
        id: bodyPartId,
      },
    })

    if (!bodyPart) return null

    const relation = await db.StretchMovementBodyPart.findOne({
      where: {
        StretchMovementId: stretchMovementId,
        BodyPartId: bodyPartId,
      },
    })

    if (relation) return null

    return await db.StretchMovementBodyPart.create({
      StretchMovementId: stretchMovementId,
      BodyPartId: bodyPartId,
    })
  }
  async deleteStretchMovementBodyPart(stretchMovementId, bodyPartId) {
    const relation = await db.StretchMovementBodyPart.findOne({
      where: {
        StretchMovementId: stretchMovementId,
        BodyPartId: bodyPartId,
      },
    })

    if (!relation) return null

    return await relation.destroy()
  }

  //stretch movement
  async getAllStretchMovements() {
    return await db.StretchMovement.findAll({
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
    })
  }
  async getStretchMovementById(stretchMovementId) {
    return await db.StretchMovement.findOne({
      where: {
        id: stretchMovementId,
      },
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
    })
  }
  async createStretchMovement(stretchMovement) {
    return await db.StretchMovement.create(stretchMovement)
  }
  async updateStretchMovement(stretchMovementId, updatedFields) {
    const stretchMovement = await this.getStretchMovementById(stretchMovementId)

    if (!stretchMovement) return null

    return await stretchMovement.update(updatedFields)
  }
  async deleteStretchMovement(stretchMovementId) {
    const stretchMovement = await this.getStretchMovementById(stretchMovementId)

    if (!stretchMovement) return null

    const BodyPartRelations = await db.StretchMovementBodyPart.findAll({
      where: {
        StretchMovementId: stretchMovementId,
      },
    })
    BodyPartRelations.forEach((relation) => {
      relation.destroy()
    })

    const stretchSessionRelations = await db.StretchSessionStretchMovement.findAll(
      {
        where: {
          StretchMovementId: stretchMovementId,
        },
      }
    )
    stretchSessionRelations.forEach((relation) => {
      relation.destroy()
    })

    return await stretchMovement.destroy()
  }

  //stretch session - stretch movement
  async getStretchSessionsByStretchMovementId(stretchMovementId) {
    const relations = await db.StretchSessionStretchMovement.findAll({
      where: {
        StretchMovementId: stretchMovementId,
      },
    })

    const stretchSessionIdList = relations.map(
      (relation) => relation.StretchSessionId
    )

    return await db.StretchSession.findAll({
      where: {
        id: {
          [Op.in]: stretchSessionIdList,
        },
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
  async addStretchSessionStretchMovement(stretchSessionId, stretchMovementId) {
    const stretchSession = await db.StretchSession.findOne({
      where: {
        id: stretchSessionId,
      },
    })

    if (!stretchSession) return null

    const stretchMovement = await db.StretchMovement.findOne({
      where: {
        id: stretchMovementId,
      },
    })

    if (!stretchMovement) return null

    const relation = await db.StretchSessionStretchMovement.findOne({
      where: {
        StretchSessionId: stretchSessionId,
        StretchMovementId: stretchMovementId,
      },
    })

    if (relation) return null

    return await db.StretchSessionStretchMovement.create({
      StretchSessionId: stretchSessionId,
      StretchMovementId: stretchMovementId,
    })
  }
  async deleteStretchSessionStretchMovement(
    stretchSessionId,
    stretchMovementId
  ) {
    const relation = await db.StretchSessionStretchMovement.findOne({
      where: {
        StretchSessionId: stretchSessionId,
        StretchMovementId: stretchMovementId,
      },
    })

    if (!relation) return null

    return await relation.destroy()
  }

  //stretch session
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
  async createStretchSession(stretchSession) {
    return await db.StretchSession.create(stretchSession)
  }
  async updateStretchSession(stretchSessionId, updatedFields) {
    const stretchSession = await this.getStretchSessionById(stretchSessionId)

    if (!stretchSession) return null

    return await stretchSession.update(updatedFields)
  }
  async deleteStretchSession(stretchSessionId) {
    const stretchSession = await this.getStretchSessionById(stretchSessionId)

    if (!stretchSession) return null

    const stretchMovementRelations = await db.StretchSessionStretchMovement.findAll(
      {
        where: {
          StretchSessionId: stretchSessionId,
        },
      }
    )
    stretchMovementRelations.forEach((relation) => relation.destroy())

    const stretchChallengeRelations = await db.StretchChallengeStretchSession.findAll(
      {
        where: {
          StretchSessionId: stretchSessionId,
        },
      }
    )
    stretchChallengeRelations.forEach((relation) => relation.destroy())

    const userRelations = await db.UserStretchSession.findAll({
      where: {
        StretchSessionId: stretchSessionId,
      },
    })
    userRelations.forEach((relation) => relation.destroy())

    return await stretchSession.destroy()
  }

  //stretch challenge - stretch session
  async getStretchChallengesByStretchSessionId(stretchSessionId) {
    const relations = await db.StretchChallengeStretchSession.findAll({
      where: {
        StretchSessionId: stretchSessionId,
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
  async addStretchChallengeStretchSession(
    stretchChallengeId,
    stretchSessionId
  ) {
    const stretchChallenge = await db.StretchChallenge.findOne({
      where: {
        id: stretchChallengeId,
      },
    })

    if (!stretchChallenge) return null

    const stretchSession = await db.StretchSession.findOne({
      where: {
        id: stretchSessionId,
      },
    })

    if (!stretchSession) return null

    const relation = await db.StretchChallengeStretchSession.findOne({
      where: {
        StretchChallengeId: stretchChallengeId,
        StretchSessionId: stretchSessionId,
      },
    })

    if (relation) return null

    return await db.StretchChallengeStretchSession.create({
      StretchChallengeId: stretchChallengeId,
      StretchSessionId: stretchSessionId,
    })
  }
  async deleteStretchChallengeStretchSession(
    stretchChallengeId,
    stretchSessionId
  ) {
    const relation = await db.StretchChallengeStretchSession.findOne({
      where: {
        StretchChallengeId: stretchChallengeId,
        StretchSessionId: stretchSessionId,
      },
    })

    if (!relation) return null

    return await relation.destroy()
  }

  //stretch challenge
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
  async createStretchChallenge(stretchChallenge) {
    return await db.StretchChallenge.create(stretchChallenge)
  }
  async updateStretchChallenge(stretchChallengeId, updatedFields) {
    const stretchChallenge = await this.getStretchChallengeById(
      stretchChallengeId
    )

    if (!stretchChallenge) return null

    return await stretchChallenge.update(updatedFields)
  }
  async deleteStretchChallenge(stretchChallengeId) {
    const stretchChallenge = await this.getStretchChallengeById(
      stretchChallengeId
    )

    if (!stretchChallenge) return null

    const stretchSessionRelations = await db.StretchChallengeStretchSession.findAll(
      {
        where: {
          StretchChallengeId: stretchChallengeId,
        },
      }
    )
    stretchSessionRelations.forEach((relation) => relation.destroy())

    const userRelations = await db.UserStretchChallenge.findAll({
      where: {
        StretchChallengeId: stretchChallengeId,
      },
    })
    userRelations.forEach((relation) => relation.destroy())

    return await stretchChallenge.destroy()
  }

  //user - stretch movement
  async getStretchMovementsByUserId(userId) {
    const relations = await db.UserStretchMovement.findAll({
      where: {
        UserId: userId,
      },
    })

    const stretchMovementsIdList = relations.map(
      (relation) => relation.StretchMovementId
    )

    return await db.StretchMovement.findAll({
      where: {
        id: {
          [Op.in]: stretchMovementsIdList,
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
    })
  }
  async getUserStretchMovementsByUserId(userId) {
    return await db.UserStretchMovement.findAll({
      where: {
        UserId: userId,
      },
    })
  }
  async addUserStretchMovement(userId, stretchMovementId) {
    const user = await db.User.findOne({
      where: {
        id: userId,
      },
    })

    if (!user) return null

    const stretchMovement = await db.StretchMovement.findOne({
      where: {
        id: stretchMovementId,
      },
    })

    if (!stretchMovement) return null

    const relation = await db.UserStretchMovement.findOne({
      where: {
        UserId: userId,
        StretchMovementId: stretchMovementId,
      },
    })

    if (relation) return null

    return await db.UserStretchMovement.create({
      UserId: userId,
      StretchMovementId: stretchMovementId,
      progress: 0,
    })
  }
  async updateUserStretchMovement(userId, stretchMovementId, updatedFields) {
    const relation = await db.UserStretchMovement.findOne({
      where: {
        UserId: userId,
        StretchMovementId: stretchMovementId,
      },
    })

    if (!relation) return null

    return await relation.update(updatedFields)
  }
  async deleteUserStretchMovement(userId, stretchMovementId) {
    const relation = await db.UserStretchMovement.findOne({
      where: {
        UserId: userId,
        StretchMovementId: stretchMovementId,
      },
    })

    if (!relation) return null

    return await relation.destroy()
  }

  //user - stretch session
  async getStretchSessionsByUserId(userId) {
    const relations = await db.UserStretchSession.findAll({
      where: {
        UserId: userId,
      },
    })

    const stretchSessionsIdList = relations.map(
      (relation) => relation.StretchSessionId
    )

    return await db.StretchSession.findAll({
      where: {
        id: {
          [Op.in]: stretchSessionsIdList,
        },
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
  async getUserStretchSessionsByUserId(userId) {
    return await db.UserStretchSession.findAll({
      where: {
        UserId: userId,
      },
    })
  }
  async addUserStretchSession(userId, stretchSessionId) {
    const user = await db.User.findOne({
      where: {
        id: userId,
      },
    })

    if (!user) return null

    const stretchSession = await db.StretchSession.findOne({
      where: {
        id: stretchSessionId,
      },
    })

    if (!stretchSession) return null

    const relation = await db.UserStretchSession.findOne({
      where: {
        UserId: userId,
        StretchSessionId: stretchSessionId,
      },
    })

    if (relation) return null

    return await db.UserStretchSession.create({
      UserId: userId,
      StretchSessionId: stretchSessionId,
      progress: 0,
    })
  }
  async updateUserStretchSession(userId, stretchSessionId, updatedFields) {
    const relation = await db.UserStretchSession.findOne({
      where: {
        UserId: userId,
        StretchSessionId: stretchSessionId,
      },
    })

    if (!relation) return null

    return await relation.update(updatedFields)
  }
  async deleteUserStretchSession(userId, stretchSessionId) {
    const relation = await db.UserStretchSession.findOne({
      where: {
        UserId: userId,
        StretchSessionId: stretchSessionId,
      },
    })

    if (!relation) return null

    return await relation.destroy()
  }

  //user - stretch challenge
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

    const relation = await db.UserStretchChallenge.findOne({
      where: {
        UserId: userId,
        StretchChallengeId: stretchChallengeId,
      },
    })

    if (relation) return null

    return await db.UserStretchChallenge.create({
      UserId: userId,
      StretchChallengeId: stretchChallengeId,
      progress: 0,
    })
  }
  async updateUserStretchChallenge(userId, stretchChallengeId, updatedFields) {
    const relation = await db.UserStretchChallenge.findOne({
      UserId: userId,
      StretchChallengeId: stretchChallengeId,
    })

    if (!relation) return null

    return await relation.update(updatedFields)
  }
  async deleteUserStretchChallenge(userId, stretchChallengeId) {
    const relation = await db.UserStretchChallenge.findOne({
      UserId: userId,
      StretchChallengeId: stretchChallengeId,
    })

    if (!relation) return null

    return await relation.destroy()
  }
}

export default WorkoutRepository
