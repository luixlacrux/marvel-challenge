import React from 'react'

function Thumbnail (props) {
  return (
    <figure className="thumbail">
      {props.thumbnail && (
        <img src={`${props.thumbnail.path}.${props.thumbnail.extension}`} alt={props.title || props.name} />
      )}
    </figure>
  )
}

export default Thumbnail
