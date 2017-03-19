import React, { Component } from 'react'
import swal from 'sweetalert'

import Loading from '../../shared/loading'
import ComicDetail from './containers/detail'
import ComicActions from './containers/actions'

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

    return (
      <div id="opacity" className="opacity active">
        <div className="Modal active" onClick={this.handleClose}>
          <div className="Modal-content" onClick={this.stopEvent}>
            <button className="Modal-button btn btn-close" onClick={this.handleClose}>
              <img src="/assets/icons/btn-close.png" alt="close icon" width="20"/>
            </button>
            <ComicDetail {...comic} />
            <ComicActions {...comic} isSaved={isSaved} handleClick={this.handleClick} />
          </div>
        </div>
      </div>
    )
  }
}

export default Comic
