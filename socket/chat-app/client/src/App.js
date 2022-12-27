import './App.css';
import io from 'socket.io-client';
import {useEffect, useState} from 'react';
import Chat from './components/Chat';

const socket = io.connect("http://localhost:8000");

function App() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [msgList, setMsgList] = useState([]);

  const joinRoom = () =>{
    if (name !== "" && room !== ""){
      socket.emit("join_room", {room:room, content:`${name} joined the room`,
      time:new Date(Date.now()).getHours() + ":"
      + new Date(Date.now()).getMinutes(), color:"grey", justify:"center" });
      setShowChat(true)
      
      setMsgList({content:"You joined the room", time:new Date(Date.now()).getHours() + ":"
       + new Date(Date.now()).getMinutes(), color:"grey", justify:"center"});
      console.log(msgList);
   
    }
  }


  return (
    <div className="App">
      {!showChat ? 
      <div className='joinChatContainer'>
      <h3>Join a chat</h3>
      <input type="text" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}}/>
      <input type="text" placeholder="Enter Room ID" onChange={(e)=>{setRoom(e.target.value)}}/>
      <button onClick={joinRoom}>Join</button>
      </div> :
      <Chat socket={socket} name={name} room={room} welcome={msgList}/>
}
    </div>
  );
}

export default App;
