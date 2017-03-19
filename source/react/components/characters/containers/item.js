import React from 'react'
import { Link } from 'react-router-dom'

import Thumbnail from '../../../shares/thumbnail'
import CharacterInfo from './info'

function CharacterItem (props) {
  const comics = props.comics.items.slice(0, 4)

  return (
    <article className="Card">
      <div className="Card-header">
        <Thumbnail thumbnail={props.thumbnail} title={props.name} />
        <CharacterInfo {...props}/>
      </div>
      <h4 className="subtitle">Related comics</h4>
      <ul className="Card-content">
        {
          comics.map(comic => {
            const id = comic.resourceURI.split('/').pop()
            const navigate = {
              pathname: `/comic/${id}`,
              state: { modal: true }
            }

            return (
              <li key={id}>
                <Link to={navigate}>{comic.name}</Link>
              </li>
            )
          })
        }
      </ul>
    </article>
  )
}

export default CharacterItem
