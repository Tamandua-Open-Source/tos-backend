import ClientError from '../../../../interfaces/core/client-error'

class DeleteGroupUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute({ userId, groupId }) {
    const group = await this.userRepository.getGroupById(groupId)

    if (!group) throw ClientError.notFound('Group Not Found')

    if (userId != group.OwnerId) {
      throw ClientError.forbidden('Only Owner Can Delete Group')
    }

    return await this.userRepository.deleteGroup(groupId)
  }
}

export default DeleteGroupUseCase
