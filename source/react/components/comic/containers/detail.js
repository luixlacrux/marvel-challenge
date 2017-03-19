import React from 'react'

import Thumbnail from '../../../shares/thumbnail'

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

export default ComicDetail
