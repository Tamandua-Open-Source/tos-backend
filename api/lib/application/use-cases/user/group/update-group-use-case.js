import { serve } from 'swagger-ui-express'
import ClientError from '../../../../interfaces/core/client-error'

class UpdateGroupUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute({ userId, groupId, updatedFields }) {
    const userGroup = await this.userRepository.getUserGroupByUserIdAndGroupId(
      userId,
      groupId
    )

    if (!userGroup)
      throw ClientError.forbidden(
        'Relation Not Found, User Is Not Part Of Group'
      )

    if (userGroup.admin == false) {
      throw ClientError.forbidden('Only Admin Users Can Edit Group')
    }

    return await this.userRepository.updateGroup(groupId, updatedFields)
  }
}

export default UpdateGroupUseCase
