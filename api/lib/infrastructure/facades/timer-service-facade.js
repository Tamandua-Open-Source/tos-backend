import axios from 'axios'

import * as dotenv from 'dotenv'
dotenv.config()

class TimerServiceFacade {
  constructor() {
    this.base_url = process.env.TIMER_URL
    this.api_key = process.env.TIMER_API_KEY
  }

  async subscribeByUserId(userId) {
    try {
      await axios.post(
        `${this.base_url}/api/timer/preferences/subscribe/${userId}`,
        {},
        {
          headers: {
            Authorization: this.api_key,
          },
        }
      )
    } catch (error) {
      console.log('[TIMER-SERVICE-FACADE] - service unavailable', error)
    }
  }

  async subscribe(idToken) {
    try {
      await axios.post(
        `${this.base_url}/api/timer/preferences/subscribe`,
        {},
        {
          headers: {
            Authorization: idToken,
          },
        }
      )
    } catch (error) {
      console.log('[TIMER-SERVICE-FACADE] - service unavailable', error)
    }
  }

  async unsubscribe(idToken) {
    try {
      await axios.delete(`${this.base_url}/api/timer/preferences/unsubscribe`, {
        headers: {
          Authorization: idToken,
        },
      })
    } catch (error) {
      console.log('[TIMER-SERVICE-FACADE] - service unavailable', error)
    }
  }

  async unsubscribeByUserId(userId) {
    try {
      await axios.delete(
        `${this.base_url}/api/timer/preferences/unsubscribe/${userId}`,
        {},
        {
          headers: {
            Authorization: this.api_key,
          },
        }
      )
    } catch (error) {
      console.log('[TIMER-SERVICE-FACADE] - service unavailable', error)
    }
  }

  async patchStartTime({ idToken, startTime }) {
    try {
      await axios.patch(
        `${this.base_url}/api/timer/preferences/`,
        {
          startTime: startTime,
        },
        {
          headers: {
            Authorization: idToken,
          },
        }
      )
    } catch (error) {
      console.log('[TIMER-SERVICE-FACADE] - service unavailable', error)
    }
  }

  async patchFcmToken({ idToken, fcmToken }) {
    try {
      await axios.patch(
        `${this.base_url}/api/timer/preferences/`,
        {
          fcmToken: fcmToken,
        },
        {
          headers: {
            Authorization: idToken,
          },
        }
      )
    } catch (error) {
      console.log('[TIMER-SERVICE-FACADE] - service unavailable', error)
    }
  }

  async patchNotification({ idToken, allowTimerNotifications }) {
    try {
      await axios.patch(
        `${this.base_url}/api/timer/preferences/`,
        {
          allowTimerNotifications,
        },
        {
          headers: {
            Authorization: idToken,
          },
        }
      )
    } catch (error) {
      console.log('[TIMER-SERVICE-FACADE] - service unavailable', error)
    }
  }
}

export default TimerServiceFacade
