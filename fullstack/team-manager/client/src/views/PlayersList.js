import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import Nav from '../components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';   
import DeleteButton from '../components/DeleteButton';

const PlayersList = () => {

    const [player, setPlayer] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/player")
            .then(res=>{
                setPlayer(res.data)
            })
    }, []);
    
    const removeFromDom = playerId =>{
        setPlayer(player.filter(player=> player._id != playerId))
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
  <tbody>
      {player.map((player, indx) =>{
        return (
            
            <tr key={indx}>
                
               <td><Link to={`/players/${player._id}`}>{player.name}</Link></td> 
                
               <td> {player.prefPosition}</td> 
                
               <td> <DeleteButton playerId={player._id} deleteThisPlayer={removeFromDom}/></td> 
            </tr>
            
        )
      })}
      </tbody>
      </table> 
      
    </div>
  )
    }

export default PlayersList
