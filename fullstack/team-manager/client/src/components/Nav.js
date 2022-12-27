import React from 'react'
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <div>
      <h3>
        <Link to="/players/list">List</Link>
        |
        <Link to="/players/addplayer">Add Player</Link>
        |
        <Link to="/status/game/1">Manage Player Status</Link>
      </h3>
    </div>
  )
}

export default Nav
