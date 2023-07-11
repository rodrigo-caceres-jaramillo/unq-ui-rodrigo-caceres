import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div id='home'>
      <NavLink to='/game'>
        <button>Jugar</button>
      </NavLink>
    </div>
  )
}

export default Home
