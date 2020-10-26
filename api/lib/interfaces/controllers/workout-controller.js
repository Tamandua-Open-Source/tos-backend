import HttpResponse from '../core/http-response'

class WorkoutController {
  constructor(useCases) {
    this.useCases = useCases
  }

  //body part
  async getAllBodyParts(_req) {
    try {
      const { getAllBodyPartsUseCase } = this.useCases
      const bodyParts = await getAllBodyPartsUseCase.execute()

      if (!bodyParts) {
        return HttpResponse.ok({ message: 'Cannot find body parts' })
      } else {
        return HttpResponse.ok({
          message: 'Body parts retrieved',
          bodyParts,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async getBodyPartById(req) {
    const { bodyPartId } = req.params

    try {
      const { getBodyPartByIdUseCase } = this.useCases
      const bodyPart = await getBodyPartByIdUseCase.execute(bodyPartId)

      if (!bodyPart) {
        return HttpResponse.ok({ message: 'Cannot find body part' })
      } else {
        return HttpResponse.ok({
          message: 'Body part retrieved',
          bodyPart,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async addBodyPart(req) {
    const { name } = req.body

    try {
      const { addBodyPartUseCase } = this.useCases
      const bodyPart = await addBodyPartUseCase.execute(name)

      if (!bodyPart) {
        return HttpResponse.ok({ message: 'Cannot create body part' })
      } else {
        return HttpResponse.ok({
          message: 'Body part created',
          bodyPart,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async updateBodyPart(req) {
    const { bodyPartId } = req.params
    const { name } = req.body

    try {
      const { updateBodyPartUseCase } = this.useCases
      const bodyPart = await updateBodyPartUseCase.execute(bodyPartId, {
        name,
      })

      if (!bodyPart) {
        return HttpResponse.ok({ message: 'Cannot update body part' })
      } else {
        return HttpResponse.ok({
          message: 'Body part updated',
          bodyPart,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async deleteBodyPart(req) {
    const { bodyPartId } = req.params

    try {
      const { deleteBodyPartUseCase } = this.useCases
      const success = await deleteBodyPartUseCase.execute(bodyPartId)

      if (!success) {
        return HttpResponse.ok({ message: 'Cannot delete body part' })
      } else {
        return HttpResponse.ok({ message: 'Body part deleted' })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  //stretch movement
  async getAllStretchMovements(_req) {
    try {
      const { getAllStretchMovementsUseCase } = this.useCases
      const stretchMovements = await getAllStretchMovementsUseCase.execute()

      if (!stretchMovements) {
        return HttpResponse.ok({ message: 'Cannot find stretch movements' })
      } else {
        return HttpResponse.ok({
          message: 'stretch movements retrieved',
          stretchMovements,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async getStretchMovementById(req) {
    const { stretchMovementId } = req.params

    try {
      const { getStretchMovementByIdUseCase } = this.useCases
      const stretchMovement = await getStretchMovementByIdUseCase.execute(
        stretchMovementId
      )

      if (!stretchMovement) {
        return HttpResponse.ok({ message: 'Cannot find stretch movement' })
      } else {
        return HttpResponse.ok({
          message: 'Stretch movement retrieved',
          stretchMovement,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async addStretchMovement(req) {
    const { name, description, duration, imageFileUrl, videoFileUrl } = req.body

    try {
      const { addStretchMovementUseCase } = this.useCases
      const stretchMovement = await addStretchMovementUseCase.execute({
        name,
        description,
        duration,
        imageFileUrl,
        videoFileUrl,
      })

      if (!stretchMovement) {
        return HttpResponse.ok({ message: 'Cannot create stretch movement' })
      } else {
        return HttpResponse.ok({
          message: 'Stretch movement created',
          stretchMovement,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async updateStretchMovement(req) {
    const { stretchMovementId } = req.params
    const { name, description, duration, imageFileUrl, videoFileUrl } = req.body

    try {
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

      if (!stretchMovement) {
        return HttpResponse.ok({ message: 'Cannot update stretch movement' })
      } else {
        return HttpResponse.ok({
          message: 'Stretch movement updated',
          stretchMovement,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async deleteStretchMovement(req) {
    const { stretchMovementId } = req.params

    try {
      const { deleteStretchMovementUseCase } = this.useCases
      const success = await deleteStretchMovementUseCase.execute(
        stretchMovementId
      )

      if (!success) {
        return HttpResponse.ok({ message: 'Cannot delete stretch movement' })
      } else {
        return HttpResponse.ok({ message: 'Stretch movement deleted' })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  //others
  async getAllStretchSessions(_req) {
    try {
      const { getAllStretchSessionsUseCase } = this.useCases
      const stretchSessions = await getAllStretchSessionsUseCase.execute()

      if (stretchSessions.length == 0) {
        return HttpResponse.ok({ message: 'No stretch sessions found' })
      } else {
        return HttpResponse.ok({
          message: 'Stretch sessions retrieved',
          stretchSessions,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async getStretchSession(req) {
    const { stretchSessionId } = req.params

    try {
      if (!stretchSessionId || !Number(stretchSessionId)) {
        return HttpResponse.badRequest(
          'Please provide a valid stretch session ID'
        )
      }

      const { getStretchSessionByIdUseCase } = this.useCases
      const stretchSession = await getStretchSessionByIdUseCase.execute(
        stretchSessionId
      )

      if (!stretchSession) {
        return HttpResponse.ok({ message: 'Cannot find stretch session' })
      } else {
        return HttpResponse.ok({
          message: 'Stretch session retrieved',
          stretchSession,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async getStretchMovementByBodyPartId(req) {
    const { bodyPartId } = req.params

    try {
      if (!bodyPartId || !Number(bodyPartId)) {
        return HttpResponse.badRequest('Please provide a valid body part ID')
      }

      const { getStretchMovementByBodyPartIdUseCase } = this.useCases
      const stretchMovements = await getStretchMovementByBodyPartIdUseCase.execute(
        bodyPartId
      )

      if (!stretchMovements) {
        return HttpResponse.ok({ message: 'Cannot find stretch movements' })
      } else {
        return HttpResponse.ok({
          message: 'Stretch movements retrieved',
          stretchMovements,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async getAllStretchChallenges(_req) {
    try {
      const { getAllStretchChallengesUseCase } = this.useCases
      const stretchChallenges = await getAllStretchChallengesUseCase.execute()

      if (!stretchChallenges) {
        return HttpResponse.ok({ message: 'Cannot find stretch challenge' })
      } else {
        return HttpResponse.ok({
          message: 'Stretch challenges retrieved',
          stretchChallenges,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async getStretchChallengeById(req) {
    const { stretchChallengeId } = req.params

    try {
      if (!stretchChallengeId || !Number(stretchChallengeId)) {
        return HttpResponse.badRequest(
          'Please provide a valid stretch challenge ID'
        )
      }

      const { getStretchChallengeByIdUseCase } = this.useCases
      const stretchChallenge = await getStretchChallengeByIdUseCase.execute(
        stretchChallengeId
      )

      if (!stretchChallenge) {
        return HttpResponse.ok({ message: 'Cannot find stretch challenge' })
      } else {
        return HttpResponse.ok({
          message: 'Stretch challenge retrieved',
          stretchChallenge,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async getStretchChallengesByUserId(req) {
    const { userId } = req.props

    try {
      const { getStretchChallengesByUserIdUseCase } = this.useCases
      const response = await getStretchChallengesByUserIdUseCase.execute(userId)

      if (!response) {
        return HttpResponse.ok({ message: 'Cannot find stretch challenges' })
      } else {
        return HttpResponse.ok({
          message: 'Stretch challenges retrieved',
          stretchChallenges: response.stretchChallenges,
          relations: response.relations,
        })
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }

  async addUserStretchChallenge(req) {
    const { userId } = req.props
    const { stretchChallengeId } = req.params

    try {
      const { addUserStretchChallengeUseCase } = this.useCases
      const relation = await addUserStretchChallengeUseCase.execute(
        userId,
        stretchChallengeId
      )

      if (!relation) {
        return HttpResponse.ok({
          message: 'Cannot link user and Stretch Challenge',
        })
      } else {
        return HttpResponse.ok({
          message: 'User linked with Stretch Challenge',
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async deleteUserStretchChallenge(req) {
    const { userId } = req.props
    const { stretchChallengeId } = req.params

    try {
      const { deleteUserStretchChallengeUseCase } = this.useCases
      const relation = await deleteUserStretchChallengeUseCase.execute(
        userId,
        stretchChallengeId
      )

      if (!relation) {
        return HttpResponse.ok({
          message: 'Cannot unlink user and Stretch Challenge',
        })
      } else {
        return HttpResponse.ok({
          message: 'User unlinked from Stretch Challenge',
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async updateUserStretchChallenge(req) {
    const { userId } = req.props
    const { stretchChallengeId } = req.params
    const { progress } = req.body

    if (!progress || !Number(progress) || progress < 0 || progress > 100) {
      return HttpResponse.badRequest(
        'Please provide a valid progress field: number between 0 and 100'
      )
    }

    try {
      const { updateUserStretchChallengeUseCase } = this.useCases
      const relation = await updateUserStretchChallengeUseCase.execute(
        userId,
        stretchChallengeId,
        progress
      )

      if (!relation) {
        return HttpResponse.ok({
          message: 'Cannot update User Stretch Challenge',
        })
      } else {
        return HttpResponse.ok({
          message: 'User Stretch Challenge updated',
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }
}

export default WorkoutController
