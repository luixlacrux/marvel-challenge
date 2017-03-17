import React, { Component } from 'react'

import api from '../../utils/api'

class Comic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comic: {},
      loading: true
    }
    this.handleClose = this.handleClose.bind(this)
    this.stopEvent = this.stopEvent.bind(this)
  }

  handleClose (e) {
    e.preventDefault()
    return this.props.history.goBack()
  }

  stopEvent (e) {
    e.stopPropagation()
  }

  componentDidMount () {
    const { match } = this.props
    this.initialFetch(match.params.id)
  }

  async initialFetch (id) {
    try {
      const comic = await api.comics.getSingle(id)
      this.setState({
        comic,
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
            <h1>Loading...</h1>
          </div>
        </div>
      )
    }

    const { comic } = this.state
    const thumbnail = comic.images[0]
    const price = comic.prices[0]

    return (
      <div id="opacity" className="opacity active">
        <div className="Modal active" onClick={this.handleClose}>
          <div className="Modal-content" onClick={this.stopEvent}>
            <button className="Modal-button btn btn-close" onClick={this.handleClose}>
              <img src="/assets/icons/btn-close.png" alt="close icon" width="20"/>
            </button>
            <div className="Modal-info">
              <figure className="thumbail">
                <img
                  src={`${thumbnail.path}.${thumbnail.extension}`}
                  alt={comic.title}/>
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
              <a href="#" className="add">
                <span>ADD TO FAVOURITES</span>
              </a>
              <a href="#" className="buy">
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