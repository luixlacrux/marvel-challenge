import React from 'react'

import Thumbnail from './thumbnail'

function ComicItem (props) {
  return (
    <li className="item">
      <button className="close btn">
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
