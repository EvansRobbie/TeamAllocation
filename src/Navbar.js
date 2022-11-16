import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <ul className='navbar-nav ms-4 mb-2 mb-lg-0'>
            <li className='nav-item'>
                <Link className='nav-link'to='/'>Home</Link>
            </li>
            <li className='nav-item'>
            <Link className='nav-link'to='/groupedTeamMembers'>Teams</Link>
            </li>

        </ul>
    </nav>
  )
}

export default Navbar