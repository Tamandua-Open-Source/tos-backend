class GetGroupsByUserIdUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute({ userId }) {
    const groups = await this.userRepository.getGroupsByUserId(userId)

    const relations = await this.userRepository.getUserGroupsByUserId(userId)

    return {
      groups,
      relations,
    }
  }
}

export default GetGroupsByUserIdUseCase
