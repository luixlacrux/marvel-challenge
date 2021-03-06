import React, { PropTypes } from 'react'

function ComicActions (props) {
  const btnClass = props.isSaved ? 'add added' : 'add'
  const price = props.prices.length > 0 ? props.prices[0].price : null

  return (
    <div className='Modal-actions'>
      <a href='#' className={btnClass} onClick={props.handleClick}>
        <span>ADD TO FAVOURITES</span>
      </a>
      <a href={props.urls[0].url} className='buy' target='_blank'>
        <span>
          BUY FOR ${price}
        </span>
      </a>
    </div>
  )
}

ComicActions.propTypes = {
  handleClick: PropTypes.func.isRequired,
  prices: PropTypes.array.isRequired,
  urls: PropTypes.array.isRequired,
  isSaved: PropTypes.bool
}

export default ComicActions
