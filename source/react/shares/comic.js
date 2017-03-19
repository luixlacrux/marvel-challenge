import React from 'react'

import Thumbnail from './thumbnail'

function ComicItem (props) {
  const handleClick = e => {
    e.preventDefault()
    props.deleteToFavourites(props.id)
  }

  return (
    <li className="item">
      <button className="close btn" onClick={handleClick}>
        <img src="/assets/icons/btn-delete.png" alt="trash icon" />
      </button>
      <Thumbnail thumbnail={props.thumbnail} title={props.title} />
      <h4 className="title">
        {props.title}
      </h4>
    </li>
  )
}

export default ComicItem
