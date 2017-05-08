import React from 'react'

function Footer () {
  return (
    <footer className='Footer'>
      <div className='Footer-content wrapper'>
        <p className='copy'>{new Date().getFullYear()} - Todos los derechos reservados</p>
        <figure className='logo'>
          {/* <img src='assets/images/grability-logo.png' alt='Grability, SAS' /> */}
        </figure>
      </div>
    </footer>
  )
}

export default Footer
