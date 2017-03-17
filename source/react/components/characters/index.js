import React, { Component } from 'react'

import CharactersList from './containers/list'
import Favourites from '../favourites'

import api from '../../utils/api'

class Characters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      loading: true
    }
  }

  componentDidMount () {
    this.initialFetch()
  }

  async initialFetch () {
    try {
      const { data } = await api.characters.getList()
      this.setState({
        data,
        loading: false
      })
      console.log(this.state);
    } catch (e) {
      this.setState({
        loading: false,
        error: true
      })
    }
  }

  render () {
    const characters = this.state.data.results ? this.state.data.results : []

    if (this.state.loading) {
      return (
        <div className="Main-content">
          <h1 className="title">Loading...</h1>
        </div>
      )
    }

    return (
      <div className="Main-content">
        { characters.length > 0 && (
          <CharactersList characters={characters}/>
        )}
        {this.state.error && (
          <h1 className="title">Error</h1>
        )}
        <Favourites />
      </div>
    )
  }
}

export default Characters
