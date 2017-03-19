import React from 'react'

function ComicItem (props) {
  return (
    <li className="item">
      <button className="close btn">
        <img src="/assets/icons/btn-delete.png" alt="trash icon" />
      </button>
      <figure className="thumbail">
        {props.thumbnail && (
          <img src={`${props.thumbnail.path}.${props.thumbnail.extension}`} alt={props.title} />
        )}
      </figure>
      <h4 className="title">
        {props.title}
      </h4>
    </li>
  )
}

export default ComicItem
