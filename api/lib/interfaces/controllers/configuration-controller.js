import HttpResponse from '../core/http-response'

class ConfigurationController {
  constructor(useCases) {
    this.useCases = useCases
  }

  async getConfiguration(_req) {
    try {
      const { getConfigurationUseCase } = this.useCases
      const configuration = await getConfigurationUseCase.execute()

      if (!configuration || configuration.length == 0) {
        return HttpResponse.ok({
          message: 'Any config find, please contact admin',
        })
      } else {
        return HttpResponse.ok(configuration)
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }
}

export default ConfigurationController
