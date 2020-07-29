class UpdateUserUseCase {
    constructor({ userRepository }) {
      this.userRepository = userRepository
    }
  
    async execute(userId, { userName }) {
      return await this.userRepository.updateUser(userId, { userName })
    }
  }
  
  export default UpdateUserUseCase
  