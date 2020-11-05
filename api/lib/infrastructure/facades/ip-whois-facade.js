import axios from 'axios'

class IpWhoIsFacade {
  async getIpInformation({ ip }) {
    try {
      const response = await axios.get(`https://ipwhois.app/json/${ip}`, {}, {})
      return response.data
    } catch (error) {
      console.log('[IP-WHOIS-FACADE] - service unavailable: ', error)
      return null
    }
  }

  async getGeolocationFromIp({ ip }) {
    if (!ip) {
      return {
        latitude: null,
        longitude: null,
      }
    }

    const data = await this.getIpInformation({ ip })

    return {
      latitude: data.latitude ?? null,
      longitude: data.longitude ?? null,
    }
  }
}

export default IpWhoIsFacade
