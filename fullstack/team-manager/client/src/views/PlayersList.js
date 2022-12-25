import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import Nav from '../components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';   

const PlayersList = () => {

    const [player, setPlayer] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/player")
            .then(res=>{
                setPlayer(res.data)
            })
    }, []);

    
    const deletePlayer = playerId =>{
        axios.delete('http://localhost:8000/api/player/' + playerId)
        .then(res => {
            console.log(res);
            setPlayer(player.filter(player=> player._id != playerId))
        })
        .catch(err => console.error(err));
}
    

  return (
    <div>
        <Nav/>
        <table className="table table-striped" style={{margin:'0 auto', width:'50%'}}>
        <thead>
        <tr>
    <th>Team Name</th>
    <th>Preferred Position</th>
    <th>Action</th>
  </tr>
  </thead>
      {player.map((player, indx) =>{
        return (
            <tbody>
            <tr key={indx}>
                
               <td><Link to={`/players/${player._id}`}>{player.name}</Link></td> 
                
               <td> {player.prefPosition}</td> 
                
               <td> <button onClick={(e)=>{deletePlayer(player._id)}}>Delete</button></td> 
            </tr>
            </tbody>
        )
      })}
      </table>
  

      
      
    </div>
  )
    }

export default PlayersList
