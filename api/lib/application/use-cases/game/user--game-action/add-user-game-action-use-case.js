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
        if (preferences.allowGeneralNotifications == true) {
          this.firebaseAdminFacade.send({
            title: 'Congratulations!',
            body: `You have reached level ${gameAfter.level.current.id}`,
            category: 'LEVEL_UP_CATEGORY',
            fcmToken: preferences.fcmToken,
            references: [gameAfter.level.current.id],
          })
        } else {
          console.log('[allowGeneralNotifications: false] - Level up')
        }
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
      if (preferences.allowGeneralNotifications == true) {
        this.firebaseAdminFacade.send({
          title: 'Congratulations!',
          body: `You unlocked achievement: '${newAchievements[0].name}'`,
          category: 'ONE_ACHIEVEMENT_CATEGORY',
          fcmToken: preferences.fcmToken,
          references: [newAchievements[0].id],
        })
      } else {
        console.log('[allowGeneralNotifications: false] - One Achievement')
      }
    } else if (newAchievements.length > 1) {
      if (preferences.allowGeneralNotifications == true) {
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
      } else {
        console.log('[allowGeneralNotifications: false] - Many Achievements')
      }
    }

    return userGameAction
  }

  async getUserGameInfo({ userId }) {
    const [gameActions, defaultLevels] = await Promise.all([
      this.gameRepository.getGameActionsByUserId({
        userId,
      }),

      this.gameRepository.getAllLevels(),
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

export default AddUserGameActionUseCase
