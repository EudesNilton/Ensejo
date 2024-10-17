import React from 'react'
import '../styles/Search.css'
import IconSearch from '../assets/search.png'
import Location from '../assets/location.png'

const Search = () => {
  return (
    <div className='search'>
        <h1>Encontre vagas de estágio</h1>
        <p>Confira gratuitamente os programas de estágio que estão abertos em todo o Brasil.</p>
        
        <div className='searchInput'>
            <div className='inputSearch'>
                <img src={IconSearch} alt="" />
                <input type="text" placeholder='Empresa ou área de atuação'/>
            </div>

            <div className='inputLocation'>
                <img src={Location} alt="" />
                <input type="text" placeholder='Estado ou cidade' />
            </div>

            <input className='button' type="button" value="Achar vagas" />
        </div>
    </div>
  )
}

export default Search