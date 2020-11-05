import axios from 'axios'

import * as dotenv from 'dotenv'
dotenv.config()

class AnalyticsServiceFacade {
  constructor() {
    this.base_url = process.env.ANALYTICS_URL
    this.api_key = process.env.ANALYTICS_API_KEY
  }

  async addUserAction({ userId, actionId, latitude, longitude }) {
    try {
      await axios.post(
        `${this.base_url}/api/users/${userId}/actions/${actionId}`,
        {
          latitude: latitude,
          longitude: longitude,
        },
        {
          headers: {
            Authorization: this.api_key,
          },
        }
      )
    } catch (error) {
      console.log('[ANALYTICS-SERVICE-FACADE] - service unavailable: ', error)
    }
  }

  async logSignIn({ userId, latitude, longitude }) {
    await this.addUserAction({
      userId,
      actionId: 1,
      latitude,
      longitude,
    })
  }

  async logSignOut({ userId, latitude, longitude }) {
    await this.addUserAction({
      userId,
      actionId: 2,
      latitude,
      longitude,
    })
  }
}

export default AnalyticsServiceFacade
