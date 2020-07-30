import HttpResponse from '../core/http-response'

class UserController {
  constructor(useCases) {
    this.useCases = useCases
  }

  async getAllUsers(_req) {
    try {
      const { getAllUsersUseCase } = this.useCases
      const users = await getAllUsersUseCase.execute()

      if (users.length == 0) {
        return HttpResponse.ok({ message: 'No users found' })
      } else {
        return HttpResponse.ok({ message: 'Users retrieved', users })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async updateUser(req) {
    const { name } = req.body
    const { userId } = req.props
    if (!name) {
      return HttpResponse.badRequest('Please provide the fields to be updated')
    }
    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { updateUserUseCase } = this.useCases
      const user = await updateUserUseCase.execute(userId, { name })

      if (!user) {
        return HttpResponse.ok({ message: 'Cannot find user to update' })
      } else {
        return HttpResponse.ok({ message: 'User successfully updated', user })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async getUser(req) {
    const { userId } = req.props
    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { getUserUseCase } = this.useCases
      const user = await getUserUseCase.execute(userId)

      if (!user) {
        return HttpResponse.ok({ message: 'Cannot find user' })
      } else {
        return HttpResponse.ok({ message: 'User retrieved', user })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async deleteUser(req) {
    const { userId } = req.props
    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { deleteUserUseCase } = this.useCases
      const user = await deleteUserUseCase.execute(userId)

      if (!user) {
        return HttpResponse.ok({ message: 'User does not exist', userId })
      } else {
        return HttpResponse.ok({ message: 'User deleted', userId })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async signInUser(req) {
    const { name, email } = req.body
    const { userId } = req.props
    if (!name) {
      return HttpResponse.badRequest('Please provide user name')
    }
    if (!email) {
      return HttpResponse.badRequest('Please provide email')
    }
    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { signInUserUseCase } = this.useCases
      const user = await signInUserUseCase.execute({
        userId: userId,
        email: email,
        name: name,
      })

      return HttpResponse.ok({ message: 'User logged in', user })
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }
}

export default UserController
