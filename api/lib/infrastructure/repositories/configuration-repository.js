import db from '../orm/models'

class ConfigurationRepository {
  async getConfiguration() {
    return await db.Configuration.findOne({
      attributes: [
        'version',
        'lastCompatibleVersion',
        'status',
        'website',
        'updatedAt',
      ],
    })
  }
}

export default ConfigurationRepository
