class AddUserGameActionUseCase {
  constructor({ gameRepository, userRepository, firebaseAdminFacade }) {
    this.gameRepository = gameRepository
    this.userRepository = userRepository
    this.firebaseAdminFacade = firebaseAdminFacade
  }

  async execute({ userId, gameActionId }) {
    const [gameBefore, preferences] = await Promise.all([
      this.getUserGameInfo({
        userId,
      }),
      this.userRepository.getUserPreferences(userId),
    ])

    const userGameAction = await this.gameRepository.addUserGameAction({
      userId,
      gameActionId,
    })

    const gameAfter = await this.getUserGameInfo({
      userId,
    })

    if (
      gameBefore &&
      gameBefore.level &&
      gameBefore.level.current &&
      gameAfter &&
      gameAfter.level &&
      gameAfter.level.current
    ) {
      if (gameAfter.level.current.id > gameBefore.level.current.id) {
        this.firebaseAdminFacade.send({
          title: 'Congratulations!',
          body: `You have reached level ${gameAfter.level.current.id}`,
          category: 'LEVEL_UP_CATEGORY',
          fcmToken: preferences.fcmToken,
          references: [gameAfter.level.current.id],
        })
      }
    }

    const newAchievements = gameAfter.achievements.achieved.filter(
      (afterAchievement) => {
        return !gameBefore.achievements.achieved.some((beforeAchievement) => {
          return beforeAchievement.id == afterAchievement.id
        })
      }
    )

    if (newAchievements.length == 1) {
      this.firebaseAdminFacade.send({
        title: 'Congratulations!',
        body: `You unlocked achievement: '${newAchievements[0].name}'`,
        category: 'ONE_ACHIEVEMENT_CATEGORY',
        fcmToken: preferences.fcmToken,
        references: [newAchievements[0].id],
      })
    } else if (newAchievements.length > 1) {
      const achievementsName = newAchievements
        .map((achievement) => achievement.name)
        .reduce((allNames, name) => allNames + `${name}', '`, '')

      this.firebaseAdminFacade.send({
        title: 'Congratulations!',
        body: `You unlocked achievements: '${achievementsName}'`.replace(
          ", ''",
          ''
        ),
        category: 'MANY_ACHIEVEMENTS_CATEGORY',
        fcmToken: preferences.fcmToken,
        id: newAchievements,
      })
    }

    return userGameAction
  }

  async getUserGameInfo({ userId }) {
    const [gameActions] = await Promise.all([
      this.gameRepository.getGameActionsByUserId({
        userId,
      }),
    ])

    let xpFromActions = 0
    let achievements = {
      achieved: [],
    }

    gameActions.forEach((gameAction) => {
      xpFromActions += gameAction.xp * gameAction.UserGameAction.counter

      gameAction.Achievements.forEach((achievement) => {
        if (gameAction.UserGameAction.counter >= achievement.requirement) {
          achievements.achieved.push(achievement)
        }
      })
    })

    const xpFromAchievements = achievements.achieved
      .map((achievement) => achievement.xp)
      .reduce((total, xp) => total + xp, 0)

    const xp = xpFromActions + xpFromAchievements

    return {
      xp,
      achievements,
    }
  }
}

export default AddUserGameActionUseCase
