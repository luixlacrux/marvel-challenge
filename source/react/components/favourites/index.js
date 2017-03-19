import React from 'react'

import ComicItem from '../../shares/comic'


function Favourites (props) {
  return (
    <div className="Favourites">
      <h2 className="title">My favourites</h2>
      <ul className="Favourites-list">
        {props.data.length > 0 && props.data
          .map(comic => {
            return <ComicItem
                      {...comic}
                      key={comic.id}
                      deleteToFavourites={props.deleteToFavourites}/>
          })
        }
      </ul>
    </div>
  )
}

export default Favourites
