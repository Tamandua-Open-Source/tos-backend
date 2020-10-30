import * as dotenv from 'dotenv'
dotenv.config()

class VerifyApiKeyUseCase {
  async execute(apiKey) {
    return apiKey == process.env.CURRENT_API_KEY
  }
}

export default VerifyApiKeyUseCase
