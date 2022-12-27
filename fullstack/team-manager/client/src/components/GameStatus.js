import React from 'react'
import axios from 'axios';
const GameStatus = (props) => {

    const style1 ={
        textAligncenter :'center',
        width:'100%',
        margin:'2% 35%'
    }
    const updateStatus = (num,id) => {
      console.log(id)
      axios.put('http://localhost:8000/api/player/' + id,props.id==1?{"status.game1":num}:props.id==2?{"status.game2":num}:{"status.game3":num})
      .then(res=>{
        console.log(res); axios.get("http://localhost:8000/api/player").then(res=>props.addToDom(res.data));
      })

  }
  
  return (
    <div style={style1}>
                    <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                    {props.players.map((player, idx) => {
                        return (
                    
                        
                        <tr key={idx}>
                            <td>{player.name}</td>
                            <td>
                              {props.id==1?
                              <div>
                            <button onClick={(e)=>updateStatus(0,player._id)} style={{backgroundColor:player.status.game1==0?"yellow" :""}}>Undecided</button>
                            <button onClick={(e)=>updateStatus(1,player._id)} style={{backgroundColor:player.status.game1==1?"green" :""}}>Playing</button>
                            <button onClick={(e)=>updateStatus(2,player._id)} style={{backgroundColor:player.status.game1==2?"red" :""}}>Not Playing</button>
                            </div>:props.id==2? 
                            <div>
                            <button onClick={(e)=>updateStatus(0,player._id)} style={{backgroundColor:player.status.game2==0?"yellow" :""}}>Undecided</button>
                            <button onClick={(e)=>updateStatus(1,player._id)} style={{backgroundColor:player.status.game2==1?"green" :""}}>Playing</button>
                            <button onClick={(e)=>updateStatus(2,player._id)} style={{backgroundColor:player.status.game2==2?"red" :""}}>Not Playing</button>
                            </div>:
                             <div>
                             <button onClick={(e)=>updateStatus(0,player._id)} style={{backgroundColor:player.status.game3==0?"yellow" :""}}>Undecided</button>
                             <button onClick={(e)=>updateStatus(1,player._id)} style={{backgroundColor:player.status.game3==1?"green" :""}}>Playing</button>
                             <button onClick={(e)=>updateStatus(2,player._id)} style={{backgroundColor:player.status.game3==2?"red" :""}}>Not Playing</button>
                             </div>
                            }
                            </td>
                        </tr>
                        
                         )})}
                         </tbody>
                    </table>
        
             
            
       
    </div>
  )
}

export default GameStatus

