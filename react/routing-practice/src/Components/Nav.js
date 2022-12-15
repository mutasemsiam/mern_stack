import React from 'react'
import { Link } from '@reach/router';
const Nav = () => {
  return (
    <div>
      <p><Link to="/dashboard">Dashboard</Link></p>
      <p><Link to="/">Home</Link></p>
    </div>
  )
}

export default Nav
