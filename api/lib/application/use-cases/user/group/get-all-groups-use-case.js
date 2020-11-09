class GetAllGroupsUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute() {
    return await this.userRepository.getAllGroups()
  }
}

export default GetAllGroupsUseCase
