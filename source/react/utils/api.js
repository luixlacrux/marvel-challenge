import fetch from 'isomorphic-fetch'

const baseURL = 'https://gateway.marvel.com/v1/public'
const apikey = '7980a4f439f0c44c00888d1624b493bb'

const api = {
  characters: {
    async getList() {
      const response = await fetch(`${baseURL}/characters?limit=10&apikey=${apikey}`)
      if (response.status >= 400) {
        throw new Error("Opps client error", { status: response.status})
      }
      const data = await response.json()
      return data
    }
  }
}

export default api
