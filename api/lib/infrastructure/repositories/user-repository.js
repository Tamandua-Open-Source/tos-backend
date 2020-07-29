import db from '../orm/models'
import IUserRepository from '../../application/repository-interfaces/i-user-repository'

class UserRepository extends IUserRepository {
  async getAllUsers() {
    return await db.User.findAll()
  }

  async getUserById(userId) {
    return await db.User.findOne({
      where: {
        id: userId,
      },
    })
  }

  async createUser(domainUser) {
    return await db.User.create(domainUser)
  }

  async updateUser(userId, updatedFields) {
    const user = await this.getUserById(userId)

    if (user) {
      const updatedUser = await db.User.update(updatedFields, {
        where: {
          id: user.id,
        },
      })

      return updatedUser
    }

    return null
  }

  async deleteUser(userId) {
    const user = await this.getUserById(userId)

    if (user) {
      return await db.User.destroy({
        where: {
          id: user.id,
        },
      })
    }

    return null
  }
}

export default UserRepository
