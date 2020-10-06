import axios from 'axios'

import * as dotenv from 'dotenv'
dotenv.config()

class TimerServiceFacade {
  constructor() {
    this.base_url = process.env.TIMER_URL
  }

  async subscribe(idToken) {
    await axios.post(
      `${this.base_url}/api/timer/preferences/subscribe`,
      {},
      {
        headers: {
          Authorization: idToken,
        },
      }
    )
  }

  async unsubscribe(idToken) {
    await axios.delete(`${this.base_url}/api/timer/preferences/unsubscribe`, {
      headers: {
        Authorization: idToken,
      },
    })
  }

  async patchStartTime({ idToken, startTime }) {
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
  }
}

export default TimerServiceFacade
