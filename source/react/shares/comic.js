import React from 'react'

function Comic (props) {
  return (
    <li className="item">
      <button className="close btn">
        <img src="assets/icons/btn-delete.png" alt="trash icon" />
      </button>
      <figure className="thumbail">
        <img src={`${props.thumbnail.path}.${props.thumbnail.extension}`} alt={props.title} />
      </figure>
      <h4 className="title">
        {props.title}
      </h4>
    </li>
  )
}

export default Comic
