const { localStorage } = window || global

const storage = {
  load () {
    const data = JSON.parse(localStorage.getItem('favourites'))
    return data || []
  },

  save (data) {
    return localStorage.setItem('favourites', JSON.stringify(data))
  }
}

export default storage
