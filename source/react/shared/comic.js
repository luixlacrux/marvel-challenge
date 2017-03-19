import React from 'react'
import { Link } from 'react-router-dom'

import Thumbnail from './thumbnail'

function ComicItem (props) {
  const handleClick = e => {
    e.preventDefault()
    props.deleteToFavourites(props.id)
  }

  const navigate = {
    pathname: `/comic/${props.id}`,
    state: { modal: true }
  }

  return (
    <li className="item">
      {props.deleteToFavourites && (
        <button className="close btn" onClick={handleClick}>
          <img src="/assets/icons/btn-delete.png" alt="trash icon" />
        </button>
      )}
      <Link to={navigate}>
        <Thumbnail thumbnail={props.thumbnail} title={props.title} />
      </Link>

      <h4 className="title">
        <Link to={navigate}>{props.title}</Link>
      </h4>
    </li>
  )
}

export default ComicItem
