import React from 'react'
import { NavLink } from 'react-router-dom'

const ActionLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Employee</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">HD</NavLink></li>
      </ul>
    </div>
  )
}

export default ActionLinks;