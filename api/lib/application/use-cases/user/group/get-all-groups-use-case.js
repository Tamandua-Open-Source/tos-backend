class GetAllGroupsUseCase {
  constructor({ userRepository, gameRepository }) {
    this.userRepository = userRepository
    this.gameRepository = gameRepository
  }

  async execute() {
    const groups = await this.userRepository.getAllGroups()

    return await Promise.all(
      groups.map(async (group) => {
        const usersWithXp = await Promise.all(
          group.Users.map(async (user) => {
            const xp = await this.getUserXp({
              userId: user.id,
            })

            return {
              ...user.toJSON(),
              ...{ xp },
            }
          })
        )

        return {
          ...group.toJSON(),
          ...{ Users: usersWithXp },
        }
      })
    )
  }

  async getUserXp({ userId }) {
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

    return xp
  }
}

export default GetAllGroupsUseCase
