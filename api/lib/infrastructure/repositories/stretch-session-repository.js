import db from '../orm/models'
import IStretchSessionRepository from '../../application/repository-interfaces/i-stretch-session-repository'

class StretchSessionRepository extends IStretchSessionRepository {
  async getAllStretchSessions() {
    return await db.StretchSession.findAll({
      include: [
        {
          model: db.StretchMovement,
          include: [
            {
              model: db.BodyPart,
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
      include: [
        {
          model: db.StretchMovement,
          include: [
            {
              model: db.BodyPart,
            },
          ],
        },
      ],
    })
  }
}

export default StretchSessionRepository
