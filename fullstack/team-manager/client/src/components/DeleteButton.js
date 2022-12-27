import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const {playerId, deleteThisPlayer} = props;

    const deletePlayer = playerId =>{
        let answer = window.confirm("Delete?");
        if (answer){
        axios.delete('http://localhost:8000/api/player/' + playerId)
        .then(res => {
            console.log(res);
            deleteThisPlayer(playerId);
            
        })
        .catch(err => console.error(err));
    }
}
  return (
    <div>
      <button onClick={(e)=>{deletePlayer(playerId)}}>Delete</button>
    </div>
  )
}

export default DeleteButton
