import React, { Component, PropTypes } from 'react'

import swal from 'sweetalert'

import Loading from '../../shared/loading'
import Thumbnail from '../../shared/thumbnail'
import ComicItem from '../../shared/comic'

import api from '../../utils/api'

class CharacterDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      character: {},
      comics: {},
      loading: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    const { match } = this.props
    this.initialFetch(match.params.id)
    window.scrollTo(0, 0)
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

  getRandomNumbers (max, elements) {
    let numbers = []
    for (let i = 0; i < elements; i++) {
      const num = Math.floor(Math.random() * max)
      !numbers.some(n => n === num) ? numbers.push(num) : i--
    }

    return numbers
  }

  handleClick (e) {
    const comics = this.state.comics.results
    const numbers = this.getRandomNumbers(comics.length, 3)

    const elements = numbers.map(num => comics[num])
    elements.forEach(this.props.addToFavourites)
    swal('Randomly save comics!', 'You clicked the button for continue!', 'success')
  }

  render () {
    if (this.state.loading) return <Loading />

    const { character, comics } = this.state
    return (
      <section className='Characters'>
        <div className='Characters-info wrapper'>
          <h2 className='title icon'>{character.name}</h2>
        </div>
        <div className='Characters-container wrapper'>
          <section className='Characters-detail'>
            <div className='info'>
              <Thumbnail thumbnail={character.thumbnail} name={character.name} />
              <p className='description'>{character.description}</p>
            </div>
            {comics.results.length > 0 && (
              <div className='Characters-comics'>
                <h2 className='subtitle'>Comics</h2>
                <button className='btn' onClick={this.handleClick}>
                  <img src='/assets/icons/btn-favourites-default.png' title='favourites icon' />
                  Random Favourites
                </button>
                <ul>
                  {
                    comics.results.map(comic => <ComicItem key={comic.id} {...comic} />)
                  }
                </ul>
              </div>
            )}
          </section>
        </div>
      </section>
    )
  }
}

CharacterDetail.propTypes = {
  addToFavourites: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
}

export default CharacterDetail
