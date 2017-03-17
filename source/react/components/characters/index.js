import React, { Component } from 'react'
import qs from 'querystring'

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

  search (props) {
    const search = qs.decode(props.location.search.replace('?', ''))

    if (search) {
      return this.initialFetch({
        nameStartsWith: search.s,
        limit: 10
      })
    }
  }

  searchOrInitialFetch (props) {
    if (props.location.search !== '') {
      return this.search(props)
    }

    const querys = { limit: 10 }
    this.initialFetch(querys)
  }

  componentWillReceiveProps (nextProps) {
    this.searchOrInitialFetch(nextProps)
  }

  componentDidMount () {
    this.searchOrInitialFetch(this.props)
  }

  async initialFetch (querys) {
    try {
      const { data } = await api.characters.getList(querys)
      this.setState({
        data,
        loading: false
      })
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
        { characters.length == 0 && (
          <h1>No results</h1>
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
