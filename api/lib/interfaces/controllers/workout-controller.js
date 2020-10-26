import HttpResponse from '../core/http-response'

class WorkoutController {
  constructor(useCases) {
    this.useCases = useCases
  }

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
