import ClientError from '../../../../interfaces/core/client-error'

class DeleteUserGroupUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute({ requesterId, userId, groupId }) {
    const group = await this.userRepository.getGroupById(groupId)
    if (!group) throw ClientError.notFound('Group Not Found')

    const requesterUser = this.userRepository.getUserById(requesterId)
    if (!requesterUser) throw ClientError.notFound('User Not Found')

    const user = this.userRepository.getUserById(requesterId)
    if (!user) throw ClientError.notFound('User Not Found')

    if (group.OwnerId == userId) {
      throw ClientError.forbidden('Cannot Delete Group Owner')
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
      if (requesterId == userId) {
        //success
      } else {
        if (userGroup.admin == true) {
          //success
        } else {
          throw ClientError.forbidden(
            'User Must Be Admin On Group To Delete Another User'
          )
        }
      }
    }

    return await this.userRepository.deleteUserGroup(userId, groupId)
  }
}

export default DeleteUserGroupUseCase
