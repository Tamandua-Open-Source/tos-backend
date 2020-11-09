import ClientError from '../../../../interfaces/core/client-error'

class UpdateUserGroupUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute({ requesterId, userId, groupId, updatedFields }) {
    const group = await this.userRepository.getGroupById(groupId)
    if (!group) throw ClientError.notFound('Group Not Found')

    const requesterUser = this.userRepository.getUserById(requesterId)
    if (!requesterUser) throw ClientError.notFound('User Not Found')

    const user = this.userRepository.getUserById(requesterId)
    if (!user) throw ClientError.notFound('User Not Found')

    if (group.OwnerId == userId) {
      throw ClientError.forbidden('Cannot Update Group Owner')
    }

    const userGroup = await this.userRepository.getUserGroupByUserIdAndGroupId(
      requesterId,
      groupId
    )

    if (!userGroup) {
      throw ClientError.forbidden(
        'Relation Not Found, User Is Not Part Of Group'
      )
    } else {
      if (userGroup.admin == true) {
        //success
      } else {
        throw ClientError.forbidden(
          'User Must Be Admin On Group To Update Relations'
        )
      }
    }

    return await this.userRepository.updateUserGroup(
      userId,
      groupId,
      updatedFields
    )
  }
}

export default UpdateUserGroupUseCase
