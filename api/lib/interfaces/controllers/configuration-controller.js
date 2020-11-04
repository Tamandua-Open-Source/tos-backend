import HttpResponse from '../core/http-response'
import ServerError from '../core/server-error'
import ClientError from '../core/client-error'

class ConfigurationController {
  constructor(useCases) {
    this.useCases = useCases
  }

  async wipeServer(_req) {
    const { wipeAllRegisteredUsersUseCase } = this.useCases
    const result = await wipeAllRegisteredUsersUseCase.execute()

    if (!result)
      return HttpResponse.accepted({
        message: 'Server Was Not Wiped',
      })

    return HttpResponse.created({
      message: 'Server Wiped',
    })
  }

  async getConfiguration(_req) {
    const { getConfigurationUseCase } = this.useCases
    const configuration = await getConfigurationUseCase.execute()

    if (!configuration)
      return HttpResponse.accepted({
        message: 'Any Config Find, Please Contact Flexibe Admin',
      })

    return HttpResponse.ok(configuration)
  }
}

export default ConfigurationController
