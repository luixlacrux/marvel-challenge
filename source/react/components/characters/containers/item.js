import React from 'react'
import { Link } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'


function CharacterItem (props) {
  const comics = props.comics.items.slice(0, 6)

  return (
    <article className="Card">
      <div className="Card-header">
        <figure className="thumbail">
          <img src={`${props.thumbnail.path}.${props.thumbnail.extension}`} alt={props.name} />
        </figure>
        <div className="info">
          <h4 className="title">
            <Link to={`/characters/${props.id}`}>{props.name}</Link>
          </h4>
          <p className="description">
            <TextTruncate
              line={5}
              truncanteText="..."
              text={props.description}
            />
          </p>
          <Link to={`/characters/${props.id}`} className="btn btn-dark">View more</Link>
        </div>
      </div>
      <h4 className="subtitle">Related comics</h4>
      <ul className="Card-content">
        {
          comics.map(comic => {
            const id = comic.resourceURI.split('/').pop()
            return (
              <li>
                <Link to={`/comic/${id}`}>{comic.name}</Link>
              </li>
            )
          })
        }
      </ul>
    </article>
  )
}

export default CharacterItem
