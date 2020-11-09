class AddGroupUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute({ userId, name, isPublic }) {
    const group = {
      OwnerId: userId,
      name,
      isPublic,
    }

    return await this.userRepository.createGroup(group)
  }
}

export default AddGroupUseCase
