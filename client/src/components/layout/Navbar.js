import React from 'react'
import { Link } from 'react-router-dom'
import ActionLinks from './ActionLinks'

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Employee Dashboard</Link>
        <ActionLinks></ActionLinks>
      </div>
    </nav>
  )
}

export default Navbar;