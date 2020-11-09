import ClientError from '../../../../interfaces/core/client-error'

class AddUserGroupUseCase {
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

    const userGroup = await this.userRepository.getUserGroupByUserIdAndGroupId(
      requesterId,
      groupId
    )

    if (!userGroup) {
      if (requesterId == userId) {
        if (group.isPublic == true) {
          //success
        } else {
          throw ClientError.forbidden(
            'User Cannot Add Himself On A Private Group'
          )
        }
      } else {
        throw ClientError.forbidden(
          'Relation Not Found, User Is Not Part Of Group'
        )
      }
    } else {
      if (requesterId == userId) {
        return null
      } else {
        if (userGroup.admin == true) {
          //sucesso
        } else {
          throw ClientError.forbidden(
            'User Must Be Admin On Group To Add Another User'
          )
        }
      }
    }

    return await this.userRepository.addUserGroup(userId, groupId)
  }
}

export default AddUserGroupUseCase
