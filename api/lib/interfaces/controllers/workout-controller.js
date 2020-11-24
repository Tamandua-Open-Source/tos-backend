import HttpResponse from '../core/http-response'
import ServerError from '../core/server-error'
import ClientError from '../core/client-error'

class WorkoutController {
  constructor(useCases) {
    this.useCases = useCases
  }

  //body part
  async getAllBodyParts(_req) {
    const { getAllBodyPartsUseCase } = this.useCases
    const bodyParts = await getAllBodyPartsUseCase.execute()

    if (!bodyParts) throw ServerError.internal()

    return HttpResponse.ok({
      message: 'Body Parts Retrieved',
      bodyParts,
    })
  }
  async getBodyPartById(req) {
    const { bodyPartId } = req.params

    if (!bodyPartId)
      throw ClientError.badRequest("Missing 'bodyPartId' Path Parameter")

    const { getBodyPartByIdUseCase } = this.useCases
    const bodyPart = await getBodyPartByIdUseCase.execute(bodyPartId)

    if (!bodyPart) throw ClientError.notFound('Body Part Not Found')

    return HttpResponse.ok({
      message: 'Body Part Retrieved',
      bodyPart,
    })
  }
  async addBodyPart(req) {
    const { name } = req.body

    if (!name) throw ClientError.badRequest("Missing 'name' Body Parameter")

    const { addBodyPartUseCase } = this.useCases
    const bodyPart = await addBodyPartUseCase.execute(name)

    if (!bodyPart)
      HttpResponse.accepted({
        message: 'Body part Already Exists',
      })

    return HttpResponse.created({
      message: 'Body Part Created',
      bodyPart,
    })
  }
  async updateBodyPart(req) {
    const { bodyPartId } = req.params
    const { name } = req.body

    if (!bodyPartId)
      throw ClientError.badRequest("Missing 'bodyPartId' Path Parameter")

    if (!name) throw ClientError.badRequest("Missing 'name' Body Parameter")

    const { updateBodyPartUseCase } = this.useCases
    const bodyPart = await updateBodyPartUseCase.execute(bodyPartId, {
      name,
    })

    if (!bodyPart) throw ClientError.notFound('Body Part Not Found')

    return HttpResponse.ok({
      message: 'Body part updated',
      bodyPart,
    })
  }
  async deleteBodyPart(req) {
    const { bodyPartId } = req.params

    if (!bodyPartId)
      throw ClientError.badRequest("Missing 'bodyPartId' Path Parameter")

    const { deleteBodyPartUseCase } = this.useCases
    const success = await deleteBodyPartUseCase.execute(bodyPartId)

    if (!success)
      return HttpResponse.accepted({ message: 'Cannot delete body part' })

    return HttpResponse.ok({ message: 'Body part deleted' })
  }

  //stretch movement - body part
  async getStretchMovementsByBodyPartId(req) {
    const { bodyPartId } = req.params

    if (!bodyPartId)
      throw ClientError.badRequest("Missing 'bodyPartId' Path Parameter")

    const { getStretchMovementsByBodyPartIdUseCase } = this.useCases
    const stretchMovements = await getStretchMovementsByBodyPartIdUseCase.execute(
      bodyPartId
    )

    if (!stretchMovements)
      throw ClientError.notFound('Stretch Movements Not Found')

    return HttpResponse.ok({
      message: 'Stretch movements retrieved',
      stretchMovements,
    })
  }
  async addStretchMovementBodyPart(req) {
    const { stretchMovementId, bodyPartId } = req.params

    if (!bodyPartId)
      throw ClientError.badRequest("Missing 'bodyPartId' Path Parameter")

    if (!stretchMovementId)
      throw ClientError.badRequest("Missing 'stretchMovementId' Path Parameter")

    const { addStretchMovementBodyPartUseCase } = this.useCases
    const relation = await addStretchMovementBodyPartUseCase.execute(
      stretchMovementId,
      bodyPartId
    )

    if (!relation)
      return HttpResponse.accepted({
        message: 'Cannot link stretch movement and body part',
      })

    return HttpResponse.created({
      message: 'stretch movement linked with body part',
    })
  }
  async deleteStretchMovementBodyPart(req) {
    const { stretchMovementId, bodyPartId } = req.params

    if (!bodyPartId)
      throw ClientError.badRequest("Missing 'bodyPartId' Path Parameter")

    if (!stretchMovementId)
      throw ClientError.badRequest("Missing 'stretchMovementId' Path Parameter")

    const { deleteStretchMovementBodyPartUseCase } = this.useCases
    const relation = await deleteStretchMovementBodyPartUseCase.execute(
      stretchMovementId,
      bodyPartId
    )

    if (!relation)
      return HttpResponse.accepted({
        message: 'Cannot unlink stretch movement from body part',
      })

    return HttpResponse.ok({
      message: 'Stretch movement unlinked from body part',
    })
  }

  //stretch movement
  async getAllStretchMovements(_req) {
    const { getAllStretchMovementsUseCase } = this.useCases
    const stretchMovements = await getAllStretchMovementsUseCase.execute()

    if (!stretchMovements) throw ServerError.internal()

    return HttpResponse.ok({
      message: 'stretch movements retrieved',
      stretchMovements,
    })
  }
  async getStretchMovementById(req) {
    const { stretchMovementId } = req.params

    if (!stretchMovementId)
      throw ClientError.badRequest("Missing 'stretchMovementId' Path Parameter")

    const { getStretchMovementByIdUseCase } = this.useCases
    const stretchMovement = await getStretchMovementByIdUseCase.execute(
      stretchMovementId
    )

    if (!stretchMovement)
      throw ClientError.notFound('Stretch Movement Not Found')

    return HttpResponse.ok({
      message: 'Stretch movement retrieved',
      stretchMovement,
    })
  }
  async addStretchMovement(req) {
    const { name, description, duration, imageFileUrl, videoFileUrl } = req.body

    const { addStretchMovementUseCase } = this.useCases
    const stretchMovement = await addStretchMovementUseCase.execute({
      name,
      description,
      duration,
      imageFileUrl,
      videoFileUrl,
    })

    if (!stretchMovement)
      return HttpResponse.accepted({
        message: 'Cannot create stretch movement',
      })

    return HttpResponse.created({
      message: 'Stretch movement created',
      stretchMovement,
    })
  }
  async updateStretchMovement(req) {
    const { stretchMovementId } = req.params
    const { name, description, duration, imageFileUrl, videoFileUrl } = req.body

    const { updateStretchMovementUseCase } = this.useCases
    const stretchMovement = await updateStretchMovementUseCase.execute(
      stretchMovementId,
      {
        name,
        description,
        duration,
        imageFileUrl,
        videoFileUrl,
      }
    )

    if (!stretchMovement)
      throw ClientError.notFound('Stretch Movement Not Found')

    return HttpResponse.ok({
      message: 'Stretch movement updated',
      stretchMovement,
    })
  }
  async deleteStretchMovement(req) {
    const { stretchMovementId } = req.params

    const { deleteStretchMovementUseCase } = this.useCases
    const success = await deleteStretchMovementUseCase.execute(
      stretchMovementId
    )

    if (!success) {
      return HttpResponse.accepted({
        message: 'Cannot delete stretch movement',
      })
    } else {
      return HttpResponse.ok({ message: 'Stretch movement deleted' })
    }
  }

  //stretch session - stretch movement
  async getStretchSessionByStretchMovementId(req) {
    const { stretchMovementId } = req.params

    const { getStretchSessionsByStretchMovementIdUseCase } = this.useCases
    const stretchSessions = await getStretchSessionsByStretchMovementIdUseCase.execute(
      stretchMovementId
    )

    if (!stretchSessions) {
      throw ClientError.notFound('Stretch Sessions Not Found')
    } else {
      return HttpResponse.ok({
        message: 'Stretch sessions retrieved',
        stretchSessions,
      })
    }
  }
  async addStretchSessionStretchMovement(req) {
    const { stretchSessionId, stretchMovementId } = req.params

    const { addStretchSessionStretchMovementUseCase } = this.useCases
    const relation = await addStretchSessionStretchMovementUseCase.execute(
      stretchSessionId,
      stretchMovementId
    )

    if (!relation) {
      return HttpResponse.accepted({
        message: 'Cannot link stretch session and stretch movement',
      })
    } else {
      return HttpResponse.created({
        message: 'Stretch session linked with stretch movement',
      })
    }
  }
  async deleteStretchSessionStretchMovement(req) {
    const { stretchSessionId, stretchMovementId } = req.params

    const { deleteStretchSessionStretchMovementUseCase } = this.useCases
    const relation = await deleteStretchSessionStretchMovementUseCase.execute(
      stretchSessionId,
      stretchMovementId
    )

    if (!relation) {
      return HttpResponse.accepted({
        message: 'Cannot unlink stretch session from stretch movement',
      })
    } else {
      return HttpResponse.ok({
        message: 'Stretch session unlinked from stretch movement',
      })
    }
  }

  //stretch session
  async getAllStretchSessions(_req) {
    const { getAllStretchSessionsUseCase } = this.useCases
    const stretchSessions = await getAllStretchSessionsUseCase.execute()

    if (!stretchSessions) {
      throw ServerError.internal()
    } else {
      return HttpResponse.ok({
        message: 'Stretch sessions retrieved',
        stretchSessions,
      })
    }
  }
  async getStretchSessionById(req) {
    const { stretchSessionId } = req.params

    const { getStretchSessionByIdUseCase } = this.useCases
    const stretchSession = await getStretchSessionByIdUseCase.execute(
      stretchSessionId
    )

    if (!stretchSession) {
      throw ClientError.notFound()
    } else {
      return HttpResponse.ok({
        message: 'Stretch session retrieved',
        stretchSession,
      })
    }
  }
  async addStretchSession(req) {
    const { name, description, imageFileUrl } = req.body

    const { addStretchSessionUseCase } = this.useCases
    const stretchSession = await addStretchSessionUseCase.execute({
      name,
      description,
      imageFileUrl,
    })

    if (!stretchSession) {
      return HttpResponse.accepted({ message: 'Cannot create stretch session' })
    } else {
      return HttpResponse.created({
        message: 'Stretch session created',
        stretchSession,
      })
    }
  }
  async updateStretchSession(req) {
    const { stretchSessionId } = req.params
    const { name, description, imageFileUrl } = req.body

    const { updateStretchSessionUseCase } = this.useCases
    const stretchSession = await updateStretchSessionUseCase.execute(
      stretchSessionId,
      {
        name,
        description,
        imageFileUrl,
      }
    )

    if (!stretchSession) {
      throw ClientError.notFound()
    } else {
      return HttpResponse.ok({
        message: 'Stretch session updated',
        stretchSession,
      })
    }
  }
  async deleteStretchSession(req) {
    const { stretchSessionId } = req.params

    const { deleteStretchSessionUseCase } = this.useCases
    const success = await deleteStretchSessionUseCase.execute(stretchSessionId)

    if (!success) {
      return HttpResponse.accepted({ message: 'Cannot delete stretch session' })
    } else {
      return HttpResponse.ok({ message: 'Stretch session deleted' })
    }
  }

  //stretch challenge - stretch session
  async getStretchChallengesByStretchSessionId(req) {
    const { stretchSessionId } = req.params

    const { getStretchChallengesByStretchSessionIdUseCase } = this.useCases
    const stretchChallenges = await getStretchChallengesByStretchSessionIdUseCase.execute(
      stretchSessionId
    )

    if (!stretchChallenges) {
      throw N + ClientError.notFound()
    } else {
      return HttpResponse.ok({
        message: 'Stretch challenges retrieved',
        stretchChallenges,
      })
    }
  }
  async addStretchChallengeStretchSession(req) {
    const { stretchChallengeId, stretchSessionId } = req.params

    const { addStretchChallengeStretchSessionUseCase } = this.useCases
    const relation = await addStretchChallengeStretchSessionUseCase.execute(
      stretchChallengeId,
      stretchSessionId
    )

    if (!relation) {
      return HttpResponse.accepted({
        message: 'Cannot link stretch challenge and stretch session',
      })
    } else {
      return HttpResponse.created({
        message: 'Stretch challenge linked with stretch session',
      })
    }
  }
  async deleteStretchChallengeStretchSession(req) {
    const { stretchChallengeId, stretchSessionId } = req.params

    const { deleteStretchChallengeStretchSessionUseCase } = this.useCases
    const relation = await deleteStretchChallengeStretchSessionUseCase.execute(
      stretchChallengeId,
      stretchSessionId
    )

    if (!relation) {
      return HttpResponse.accepted({
        message: 'Cannot unlink stretch challenge from stretch session',
      })
    } else {
      return HttpResponse.ok({
        message: 'Stretch challenge unlinked from stretch session',
      })
    }
  }

  //stretch challenge
  async getAllStretchChallenges(_req) {
    const { getAllStretchChallengesUseCase } = this.useCases
    const stretchChallenges = await getAllStretchChallengesUseCase.execute()

    if (!stretchChallenges) {
      throw ServerError.internal()
    } else {
      return HttpResponse.ok({
        message: 'Stretch challenges retrieved',
        stretchChallenges,
      })
    }
  }
  async getStretchChallengeById(req) {
    const { stretchChallengeId } = req.params

    const { getStretchChallengeByIdUseCase } = this.useCases
    const stretchChallenge = await getStretchChallengeByIdUseCase.execute(
      stretchChallengeId
    )

    if (!stretchChallenge) {
      throw ClientError.notFound()
    } else {
      return HttpResponse.ok({
        message: 'Stretch challenge retrieved',
        stretchChallenge,
      })
    }
  }
  async addStretchChallenge(req) {
    const { name, description } = req.body

    const { addStretchChallengeUseCase } = this.useCases
    const stretchChallenge = await addStretchChallengeUseCase.execute({
      name,
      description,
    })

    if (!stretchChallenge) {
      return HttpResponse.accepted({
        message: 'Cannot create stretch challenge',
      })
    } else {
      return HttpResponse.created({
        message: 'Stretch challenge created',
        stretchChallenge,
      })
    }
  }
  async updateStretchChallenge(req) {
    const { stretchChallengeId } = req.params
    const { name, description } = req.body

    const { updateStretchChallengeUseCase } = this.useCases
    const stretchChallenge = await updateStretchChallengeUseCase.execute(
      stretchChallengeId,
      {
        name,
        description,
      }
    )

    if (!stretchChallenge) {
      throw ClientError.notFound()
    } else {
      return HttpResponse.ok({
        message: 'Stretch challenge updated',
        stretchChallenge,
      })
    }
  }
  async deleteStretchChallenge(req) {
    const { stretchChallengeId } = req.params

    const { deleteStretchChallengeUseCase } = this.useCases
    const success = await deleteStretchChallengeUseCase.execute(
      stretchChallengeId
    )

    if (!success) {
      return HttpResponse.accepted({
        message: 'Cannot delete stretch challenge',
      })
    } else {
      return HttpResponse.ok({ message: 'Stretch challenge deleted' })
    }
  }

  //user - stretch movement
  async getStretchMovementsByUserId(req) {
    const { userId } = req.props

    const { getStretchMovementsByUserIdUseCase } = this.useCases
    const stretchMovements = await getStretchMovementsByUserIdUseCase.execute(
      userId
    )

    if (!stretchMovements) {
      throw ServerError.internal()
    } else {
      return HttpResponse.ok({
        message: 'Stretch Movements retrieved',
        stretchMovements,
      })
    }
  }
  async addUserStretchMovement(req) {
    const { userId } = req.props
    const { stretchMovementId } = req.params

    const { addUserStretchMovementUseCase } = this.useCases
    const relation = await addUserStretchMovementUseCase.execute(
      userId,
      stretchMovementId
    )

    if (!relation) {
      return HttpResponse.accepted({
        message: 'Cannot link user and Stretch Movement',
      })
    } else {
      return HttpResponse.created({
        message: 'User linked with Stretch Movement',
      })
    }
  }
  async updateUserStretchMovement(req) {
    const { userId } = req.props
    const { stretchMovementId } = req.params
    const { progress, rating } = req.body

    const { updateUserStretchMovementUseCase } = this.useCases
    const relation = await updateUserStretchMovementUseCase.execute(
      userId,
      stretchMovementId,
      {
        progress,
        rating,
      }
    )

    if (!relation) {
      throw ClientError.notFound()
    } else {
      return HttpResponse.ok({
        message: 'User Stretch Movement updated',
      })
    }
  }
  async deleteUserStretchMovement(req) {
    const { userId } = req.props
    const { stretchMovementId } = req.params

    const { deleteUserStretchMovementUseCase } = this.useCases
    const relation = await deleteUserStretchMovementUseCase.execute(
      userId,
      stretchMovementId
    )

    if (!relation) {
      return HttpResponse.accepted({
        message: 'Cannot unlink user and Stretch Movement',
      })
    } else {
      return HttpResponse.ok({
        message: 'User unlinked from Stretch Movement',
      })
    }
  }

  //user - stretch session
  async getStretchSessionsByUserId(req) {
    const { userId } = req.props

    const { getStretchSessionsByUserIdUseCase } = this.useCases
    const stretchSessions = await getStretchSessionsByUserIdUseCase.execute(
      userId
    )

    if (!stretchSessions) {
      throw ServerError.internal()
    } else {
      return HttpResponse.ok({
        message: 'Stretch sessions retrieved',
        stretchSessions,
      })
    }
  }
  async addUserStretchSession(req) {
    const { userId } = req.props
    const { stretchSessionId } = req.params

    const { addUserStretchSessionUseCase } = this.useCases
    const relation = await addUserStretchSessionUseCase.execute(
      userId,
      stretchSessionId
    )

    if (!relation) {
      return HttpResponse.accepted({
        message: 'Cannot link user and Stretch session',
      })
    } else {
      return HttpResponse.created({
        message: 'User linked with Stretch session',
      })
    }
  }
  async updateUserStretchSession(req) {
    const { userId } = req.props
    const { stretchSessionId } = req.params
    const { progress, rating } = req.body

    const { updateUserStretchSessionUseCase } = this.useCases
    const relation = await updateUserStretchSessionUseCase.execute(
      userId,
      stretchSessionId,
      {
        progress,
        rating,
      }
    )

    if (!relation) {
      throw ClientError.notFound()
    } else {
      return HttpResponse.ok({
        message: 'User Stretch session updated',
      })
    }
  }
  async deleteUserStretchSession(req) {
    const { userId } = req.props
    const { stretchSessionId } = req.params

    const { deleteUserStretchSessionUseCase } = this.useCases
    const relation = await deleteUserStretchSessionUseCase.execute(
      userId,
      stretchSessionId
    )

    if (!relation) {
      return HttpResponse.accepted({
        message: 'Cannot unlink user and Stretch Session',
      })
    } else {
      return HttpResponse.ok({
        message: 'User unlinked from Stretch Session',
      })
    }
  }

  //user - stretch challenge
  async getStretchChallengesByUserId(req) {
    const { userId } = req.props

    const { getStretchChallengesByUserIdUseCase } = this.useCases
    const stretchChallenges = await getStretchChallengesByUserIdUseCase.execute(
      userId
    )

    if (!stretchChallenges) {
      throw ServerError.internal()
    } else {
      return HttpResponse.ok({
        message: 'Stretch challenges retrieved',
        stretchChallenges,
      })
    }
  }
  async addUserStretchChallenge(req) {
    const { userId } = req.props
    const { stretchChallengeId } = req.params

    const { addUserStretchChallengeUseCase } = this.useCases
    const relation = await addUserStretchChallengeUseCase.execute(
      userId,
      stretchChallengeId
    )

    if (!relation) {
      return HttpResponse.accepted({
        message: 'Cannot link user and Stretch Challenge',
      })
    } else {
      return HttpResponse.created({
        message: 'User linked with Stretch Challenge',
      })
    }
  }
  async updateUserStretchChallenge(req) {
    const { userId } = req.props
    const { stretchChallengeId } = req.params
    const { progress, rating } = req.body

    const { updateUserStretchChallengeUseCase } = this.useCases
    const relation = await updateUserStretchChallengeUseCase.execute(
      userId,
      stretchChallengeId,
      {
        progress,
        rating,
      }
    )

    if (!relation) {
      throw ClientError.notFound()
    } else {
      return HttpResponse.ok({
        message: 'User Stretch Challenge updated',
      })
    }
  }
  async deleteUserStretchChallenge(req) {
    const { userId } = req.props
    const { stretchChallengeId } = req.params

    const { deleteUserStretchChallengeUseCase } = this.useCases
    const relation = await deleteUserStretchChallengeUseCase.execute(
      userId,
      stretchChallengeId
    )

    if (!relation) {
      return HttpResponse.accepted({
        message: 'Cannot unlink user and Stretch Challenge',
      })
    } else {
      return HttpResponse.ok({
        message: 'User unlinked from Stretch Challenge',
      })
    }
  }

  //recommendation
  async getRecommendedStretchMovementsByUserId(req) {
    const { userId } = req.props

    const { getRecommendedStretchMovementsUseCase } = this.useCases
    const stretchMovements = await getRecommendedStretchMovementsUseCase.execute(
      userId
    )

    if (!stretchMovements) {
      return HttpResponse.noContent()
    } else {
      return HttpResponse.ok({
        message: 'Reccomended Stretch Movements retrieved',
        stretchMovements,
      })
    }
  }
  async getRecommendedStretchSessionsByUserId(req) {
    const { userId } = req.props

    const { getRecommendedStretchSessionsUseCase } = this.useCases
    const stretchSessions = await getRecommendedStretchSessionsUseCase.execute(
      userId
    )

    if (!stretchSessions) {
      return HttpResponse.noContent()
    } else {
      return HttpResponse.ok({
        message: 'Reccomended Stretch Sessions retrieved',
        stretchSessions,
      })
    }
  }
  async getRecommendedStretchChallengesByUserId(req) {
    const { userId } = req.props

    const { getRecommendedStretchChallengesUseCase } = this.useCases
    const stretchChallenges = await getRecommendedStretchChallengesUseCase.execute(
      userId
    )

    if (!stretchChallenges) {
      return HttpResponse.noContent()
    } else {
      return HttpResponse.ok({
        message: 'Reccomended Stretch Challenges retrieved',
        stretchChallenges,
      })
    }
  }
}

export default WorkoutController
