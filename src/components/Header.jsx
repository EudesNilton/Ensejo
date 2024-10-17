import React from 'react'
import Usuario from './User'

import EnsejoLogo from '../assets/ensejoLogo.png'
import '../styles/Header.css'

const Header = () => {
  return (
    <header>
        <img className="logoEnsejo" src={EnsejoLogo} alt="logo" />    

        <nav>
            <Usuario />
        </nav>
    </header>
  )
}

export default Header