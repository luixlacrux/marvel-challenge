import React, { Component } from 'react'
import Pagination from 'react-js-pagination'
import qs from 'querystring'

import CharacterItem from './containers/item'

import Loading from '../../shared/loading'

import api from '../../utils/api'

class Characters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      activePage: 1,
      loading: true
    }

    this.handlePageChange = this.handlePageChange.bind(this)
  }

  getSearchValue (nextProps) {
    const props = nextProps || this.props
    const query = qs.decode(props.location.search.replace('?', ''))
    return query.s ? query.s : null
  }

  search (nextProps) {
    const search = this.getSearchValue(nextProps)

    this.setState({ activePage: 1 })
    this.initialFetch({
      nameStartsWith: search,
      limit: 10
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.location.search !== '') {
      return this.search(nextProps)
    }

    this.setState({ activePage: 1 })
    this.initialFetch({ limit: 10 })
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.location != this.props.location) {
      window.scrollTo(0,0)
    }
  }

  componentDidMount () {
    this.initialFetch({ limit: 10 })
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

  handlePageChange (nextPage) {
    const { data } = this.state
    const offset = data.limit * nextPage - 10

    this.setState({ activePage: nextPage })
    const nameStartsWith = this.getSearchValue()

    if (nameStartsWith) {
      this.initialFetch({ limit: 10, offset, nameStartsWith })
    } else {
      this.initialFetch({ limit: 10, offset })
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
        <div className="Characters-pagination">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.data.limit}
            totalItemsCount={this.state.data.total}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
        </div>
      </section>
    )
  }
}

export default Characters
