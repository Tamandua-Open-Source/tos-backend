class GetGameByUserIdUseCase {
  constructor({ gameRepository }) {
    this.gameRepository = gameRepository
  }

  async execute({ userId }) {
    const [gameActions, defaultLevels, defaultAchievements] = await Promise.all(
      [
        this.gameRepository.getGameActionsByUserId({
          userId,
        }),

        this.gameRepository.getAllLevels(),

        this.gameRepository.getAllAchievements(),
      ]
    )

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

    defaultAchievements
      .filter((achievement) => {
        return !(
          achievements.achieved.some(
            (achieved) => achieved.id == achievement.id
          ) ||
          achievements.incomplete.some(
            (achieved) => achieved.id == achievement.id
          )
        )
      })
      .forEach((achievement) => {
        achievements.incomplete.push({
          ...achievement.toJSON(),
          ...{ GameAction: undefined },
          ...{ progress: 0 },
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

    for (let i = 0; i < defaultLevels.length; i++) {
      if (defaultLevels[i].xp <= xp) {
        level.current = defaultLevels[i]
      }

      if (defaultLevels[i].xp > xp) {
        level.next = defaultLevels[i]
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
