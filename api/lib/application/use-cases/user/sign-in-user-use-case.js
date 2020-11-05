class SignInUserUseCase {
  constructor({
    userRepository,
    timerServiceFacade,
    analyticsServiceFacade,
    ipWhoIsFacade,
  }) {
    this.userRepository = userRepository
    this.timerServiceFacade = timerServiceFacade
    this.analyticsServiceFacade = analyticsServiceFacade
    this.ipWhoIsFacade = ipWhoIsFacade
  }

  async execute({ idToken, userId, email, name, ip }) {
    const user = await this.userRepository.getUserById(userId)

    await this.timerServiceFacade.subscribe(idToken)

    this.ipWhoIsFacade.getGeolocationFromIp({ ip }).then((result) => {
      this.analyticsServiceFacade.logSignIn({
        userId,
        latitude: result.latitude,
        longitude: result.longitude,
      })
    })

    if (user) return user

    return await this.userRepository.createUser({
      id: userId,
      email: email,
      name: name,
    })
  }
}

export default SignInUserUseCase
