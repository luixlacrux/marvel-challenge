import React from 'react'

import ComicItem from '../../shares/comic'


function Favourites (props) {
  return (
    <div className="Favourites">
      <h2 className="title">My favourites</h2>
      <ul className="Favourites-list">
        {props.data.length && props.data
          .map(comic => <ComicItem key={comic.id} {...comic}/>)
        }
      </ul>
    </div>
  )
}

export default Favourites
