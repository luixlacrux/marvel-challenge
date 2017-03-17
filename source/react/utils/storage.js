const storage = {
  load () {
    const data = JSON.parse(localStorage.getItem('favourites'))
    return data ? data : false
  },

  save (data) {
    return localStorage.setItem('favourites', JSON.stringify(data))
  }
}

export default storage
