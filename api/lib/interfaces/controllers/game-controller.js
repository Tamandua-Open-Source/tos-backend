import HttpResponse from '../core/http-response'
import ServerError from '../core/server-error'
import ClientError from '../core/client-error'

class GameController {
  constructor(useCases) {
    this.useCases = useCases
  }

  //achievements
  async getAllAchievements(_req) {
    const { getAllAchievementsUseCase } = this.useCases
    const achievements = await getAllAchievementsUseCase.execute()

    if (!achievements) throw ServerError.internal()

    return HttpResponse.ok({ achievements })
  }

  //core
  async getGameByUserId(req) {
    const { userId } = req.props

    if (!userId) throw ServerError.internal()

    const { getGameByUserIdUseCase } = this.useCases
    const game = await getGameByUserIdUseCase.execute({
      userId,
    })

    if (!game) throw ServerError.internal()

    return HttpResponse.ok({ game })
  }

  //game action
  async getAllGameActions(_req) {
    const { getAllGameActionsUseCase } = this.useCases
    const gameActions = await getAllGameActionsUseCase.execute()

    if (!gameActions) throw ServerError.internal()

    return HttpResponse.ok({ gameActions })
  }

  //level
  async getAllLevels(_req) {
    const { getAllLevelsUseCase } = this.useCases
    const levels = await getAllLevelsUseCase.execute()

    if (!levels) throw ClientError.internal()

    return HttpResponse.ok({ levels })
  }

  //user - game action
  async addUserGameAction(req) {
    const { userId } = req.props
    const { gameActionId } = req.params

    if (!userId) throw ServerError.internal()
    if (!gameActionId) throw ClientError.badRequest()

    const { addUserGameActionUseCase } = this.useCases
    const userGameAction = await addUserGameActionUseCase.execute({
      userId,
      gameActionId,
    })

    if (!userGameAction) return HttpResponse.noContent()

    return HttpResponse.created({ userGameAction })
  }
}

export default GameController
