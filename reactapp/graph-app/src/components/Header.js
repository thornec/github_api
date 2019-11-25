import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <div className='navbar'>

  <header>

    <button class="ui button">
        <Link to='/'>
        Home
        </Link>
    </button>
    <button class="ui button">
        <Link to='/Repos'>
        Repos
        </Link>
    </button>
    <button class="ui button">
        <Link to='/user'>
        User
        </Link>
    </button>

  </header>
  </div>
)

export default Header
