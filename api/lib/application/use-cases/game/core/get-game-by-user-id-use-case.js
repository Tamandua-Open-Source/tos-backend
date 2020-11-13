class GetGameByUserIdUseCase {
  constructor({ gameRepository }) {
    this.gameRepository = gameRepository
  }

  async execute({ userId }) {
    const [gameActions, levels] = await Promise.all([
      this.gameRepository.getGameActionsByUserId({
        userId,
      }),

      this.gameRepository.getAllLevels(),
    ])

    let xpFromActions = 0
    let achievements = {
      achieved: [],
      incomplete: [],
    }

    gameActions.forEach((gameAction) => {
      xpFromActions += gameAction.xp * gameAction.UserGameAction.counter

      gameAction.Achievements.forEach((achievement) => {
        if (gameAction.UserGameAction.counter >= achievement.requirement) {
          achievements.achieved.push(achievement)
        } else {
          achievements.incomplete.push({
            ...achievement.toJSON(),
            ...{ progress: gameAction.UserGameAction.counter },
          })
        }
      })
    })

    const xpFromAchievements = achievements.achieved
      .map((achievement) => achievement.xp)
      .reduce((total, xp) => total + xp, 0)

    const xp = xpFromActions + xpFromAchievements

    let level = {
      current: {},
      next: {},
    }

    for (let i = 0; i < levels.length; i++) {
      if (levels[i].xp <= xp) {
        level.current = levels[i]
      }

      if (levels[i].xp > xp) {
        level.next = levels[i]
        break
      }
    }

    return {
      xp,
      level,
      achievements,
    }
  }
}

export default GetGameByUserIdUseCase
