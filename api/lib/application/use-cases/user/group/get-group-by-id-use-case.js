class GetGroupByIdUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute({ groupId }) {
    return await this.userRepository.getGroupById(groupId)
  }
}

export default GetGroupByIdUseCase
