import React, { Component } from 'react'
import swal from 'sweetalert'

import Loading from '../../shares/loading'

import api from '../../utils/api'

class Comic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comic: {},
      isSaved: false,
      loading: true
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.stopEvent = this.stopEvent.bind(this)
  }

  notScroll () {
    document.body.classList.toggle('not-scroll')
  }

  handleClose (e) {
    e.preventDefault()
    this.notScroll()
    this.props.history.goBack()
  }

  stopEvent (e) {
    e.stopPropagation()
  }

  componentDidMount () {
    const { match } = this.props
    this.initialFetch(match.params.id)
    this.notScroll()
  }

  inFavourites (id) {
    const comicId = id ? id : this.state.comic.id
    return this.props.favourites
      .find(item => item.id == comicId) ? true : false
  }

  handleClick (e) {
    e.preventDefault()
    if (this.inFavourites()) {
      swal("Oops!", "This comic already exists!", "warning")
    } else {
      this.props.addToFavourites(this.state.comic)
      swal("Save!", "You clicked the button!", "success")
      this.setState({ isSaved: true })
    }
  }

  async initialFetch (id) {
    try {
      const comic = await api.comics.getSingle(id)
      this.setState({
        comic,
        isSaved: this.inFavourites(id),
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
    if (this.state.loading) {
      return (
        <div id="opacity" className="opacity active">
          <div className="Modal active">
            <Loading />
          </div>
        </div>
      )
    }

    const { comic, isSaved } = this.state
    const price = comic.prices.length > 0 ? comic.prices[0] : null
    const btnClass = isSaved ? 'add added' : 'add'

    return (
      <div id="opacity" className="opacity active">
        <div className="Modal active" onClick={this.handleClose}>
          <div className="Modal-content" onClick={this.stopEvent}>
            <button className="Modal-button btn btn-close" onClick={this.handleClose}>
              <img src="/assets/icons/btn-close.png" alt="close icon" width="20"/>
            </button>
            <div className="Modal-info">
              <figure className="thumbail">
                {comic.thumbnail && (
                  <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}/>
                )}
              </figure>
              <div className="extract">
                <h4 className="title">
                  {comic.title}
                </h4>
                <p className="description">
                  {comic.description}
                </p>
              </div>
            </div>
            <div className="Modal-actions">
              <a href="#" className={btnClass} onClick={this.handleClick}>
                <span>ADD TO FAVOURITES</span>
              </a>
              <a href={comic.urls[0].url} className="buy" target="_blank">
                <span>
                  BUY FOR ${price.price}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comic
