import HttpResponse from '../core/http-response'

class StretchSessionController {
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
}

export default StretchSessionController
