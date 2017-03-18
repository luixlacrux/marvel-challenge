import React from 'react'

import CharacterItem from './item'

function CharactersList (props) {
  return (
    <section className="Characters">
      <div className="Characters-info wrapper">
        <h2 className="title icon">Characters</h2>
        <select name="sort">
          <option>Sort by</option>
          <option value="name">Name</option>
          <option value="other">Some thing</option>
        </select>
      </div>
      <div className="Characters-container wrapper">
        {
          props.characters.length > 0
          ? (
            props.characters
              .map(character => <CharacterItem key={character.id} {...character} />)
            )
          : <h1 className="title">No results</h1>

        }
      </div>
       {props.characters.length > 0 && (
         <nav className="Characters-paginator">
           <ul className="list">
             <li className="item">
               <a href="#">prev</a>
             </li>
             <li className="item active">
               <a href="#">1</a>
             </li>
             <li className="item">
               <a href="#">2</a>
             </li>
             <li className="item">
               <a href="#">3</a>
             </li>
             <li className="item">
               <a href="">next</a>
             </li>
           </ul>
         </nav>
       )}
    </section>
  )
}

export default CharactersList
