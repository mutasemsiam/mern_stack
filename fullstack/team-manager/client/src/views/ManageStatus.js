import { Link } from '@reach/router'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import GameStatus from '../components/GameStatus'
import Nav from '../components/Nav'
const ManageStatus = (props) => {
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/player")
        .then(res => {setPlayers(res.data); console.log("yeeea");setLoaded(true);})
        
        .catch(err => console.error(err));
}, [])

  const addToDom = newPlayers =>{
    setPlayers(newPlayers);
  }

  return (
    <div>
      <Nav/>
      <br/>
        Player Status - Game{props.id} :
        <br></br>
        <br></br>
        <Link to ="/status/game/1">Game1</Link>  | <Link to ="/status/game/2">Game2</Link> |
         <Link to ="/status/game/3">Game3</Link>
        {loaded &&<GameStatus id={props.id} addToDom={addToDom} players={players}/>}
    </div>
  )
}

export default ManageStatus