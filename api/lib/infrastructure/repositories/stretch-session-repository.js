import db from '../orm/models'
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
}

export default StretchSessionRepository
