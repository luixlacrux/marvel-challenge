import React, { PropTypes } from 'react'

import Thumbnail from '../../../shared/thumbnail'

function ComicDetail (props) {
  return (
    <div className="Modal-info">
      <Thumbnail thumbnail={props.thumbnail} title={props.title} />
      <div className="extract">
        <h4 className="title">
          {props.title}
        </h4>
        <p className="description">
          {props.description}
        </p>
      </div>
    </div>
  )
}

ComicDetail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.object
}

export default ComicDetail
