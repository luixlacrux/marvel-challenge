import React, { PropTypes } from 'react'

function Thumbnail (props) {
  return (
    <figure className="thumbnail">
      {props.thumbnail && (
        <img src={`${props.thumbnail.path}.${props.thumbnail.extension}`} alt={props.title || props.name} />
      )}
    </figure>
  )
}

Thumbnail.propTypes = {
  thumbnail: PropTypes.shape({
    path: PropTypes.string,
    extension: PropTypes.string
  }),
  title: PropTypes.string,
  name: PropTypes.string
}

export default Thumbnail
