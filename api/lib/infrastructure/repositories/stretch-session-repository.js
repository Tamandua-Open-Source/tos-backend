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
    const stretchMovements = await db.StretchMovement.findAll({
      attributes: ['id'],
      include: [
        {
          model: db.BodyPart,
          where: {
            id: bodyPartId,
          },
          attributes: ['id'],
          through: {
            attributes: [],
          },
        },
      ],
    })

    const stretchMovementsIdList = stretchMovements.map(
      (stretchMovement) => stretchMovement.id
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
}

export default StretchSessionRepository
