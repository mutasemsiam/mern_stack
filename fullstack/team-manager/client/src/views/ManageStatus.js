import { Link } from '@reach/router'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import GameStatus from '../components/GameStatus'
import Nav from '../components/Nav'
const ManageStatus = (props) => {

  return (
    <div>
      <Nav/>
      <br/>
        Player Status - Game{props.id} :
        <br></br>
        <br></br>
        <Link to ="/status/game/1">Game1</Link>  | <Link to ="/status/game/2">Game2</Link> |
         <Link to ="/status/game/3">Game3</Link>
        <GameStatus id={props.id} />
    </div>
  )
}

export default ManageStatus