import React, { Component } from 'react'

import Loading from '../../shares/loading'
import Thumbnail from '../../shares/thumbnail'
import ComicItem from '../../shares/comic'

import api from '../../utils/api'

class CharacterDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      character: {},
      comics: {},
      loading: true
    }
  }

  componentDidMount () {
    const { match } = this.props
    this.initialFetch(match.params.id)
  }

  async initialFetch (id) {
    const [
      character,
      comics
    ] = await Promise.all([
      api.characters.getSingle(id),
      api.characters.getComics(id)
    ])

    this.setState({
      character,
      comics,
      loading: false
    })
  }

  render () {
    if (this.state.loading) return <Loading />

    const { character, comics } = this.state
    return (
      <section className="Characters">
        <div className="Characters-info wrapper">
          <h2 className="title icon">{character.name}</h2>
        </div>
        <div className="Characters-container wrapper">
          <div className="Characters-detail">
            <Thumbnail thumbnail={character.thumbnail} name={character.name}/>
            <p className="description">{character.description}</p>
            <h2 className="title">Comics</h2>
            <ul className="Characters-comics">
              {comics.results && (
                comics.results.map(comic => <ComicItem key={comic.id} {...comic} />)
              )}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default CharacterDetail
