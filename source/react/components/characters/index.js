import React, { Component } from 'react'
import qs from 'querystring'

import CharacterItem from './containers/item'

import Loading from '../../shared/loading'

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

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.location != this.props.location) {
      window.scrollTo(0,0)
    }
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
      return <Loading />
    }

    return (
      <section className="Characters">
        <div className="Characters-info wrapper">
          <h2 className="title icon">Characters</h2>
          <select name="sort">
            <option>Sort by</option>
            <option value="name">Name</option>
            <option value="other">Some thing</option>
          </select>
        </div>
        <div className="Characters-container wrapper">
          {characters.length > 0
            ? (
              characters
                .map(character => {
                  return <CharacterItem key={character.id} {...character} />
                })
              )
            : <h1 className="title">No results</h1>
          }
        </div>
         {characters.length > 0 && (
           <nav className="Characters-paginator">
             <ul className="list">
               <li className="item">
                 <a href="#">prev</a>
               </li>
               <li className="item active">
                 <a href="#">1</a>
               </li>
               <li className="item">
                 <a href="#">2</a>
               </li>
               <li className="item">
                 <a href="#">3</a>
               </li>
               <li className="item">
                 <a href="">next</a>
               </li>
             </ul>
           </nav>
         )}
      </section>
    )
  }
}

export default Characters
