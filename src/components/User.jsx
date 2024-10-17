import React, { useState } from 'react'
import UserStart from '../assets/userStart.png'
import CloseUserStart from '../assets/closeUserStart.png'

import '../styles/User.css'

const User = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (

    <div>
      <button className="userStart" onClick={handleClick}><img src={UserStart} alt="" /></button>
      <div className={isActive ? "ativo" : "user"}>

        <form action="">
          <img onClick={handleClick} src={CloseUserStart} alt="" />
          <label htmlFor="name"></label>
          <input type="text" name="name" placeholder='Email ou CPF' id="" />

          <label htmlFor="password"></label>
          <input type="password" name="password" placeholder='Senha' id="" />
          
          <input className='button' type="button" value="Entrar" />
        </form>

        <a href="#">Esqueceu a senha?</a>

        <button>Criar nova conta</button>

      </div>
    </div>
  )
}

export default User