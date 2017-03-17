import React, { Component } from 'react'

import comic from '../../shares/comic'

import storage from '../../utils/storage'

class Favourites extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favourites: [],
      loading: true
    }
  }

  componentDidMount () {
    this.loadStorage()
  }

  loadStorage () {
    const favourites = storage.load()
    this.setState({
      favourites,
      loading: false
    })
  }

  render () {
    if (this.state.loading) {
      return <h6>Loading...</h6>
    }
    
    return (
      <div className="Favourites">
        <h2 className="title">My favourites</h2>
        <ul className="Favourites-list">
          { this.state.favourites.length && this.state.favourites
            .map(comic => <Comic key={comic.id} {...comic}/>)
          }
          {this.state.loading && (
            <h6>Loading...</h6>
          )}
        </ul>
      </div>
    )
  }
}

export default Favourites
