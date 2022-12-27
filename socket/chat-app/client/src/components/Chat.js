import React, { useEffect, useState } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';

const Chat = ({socket, name, room, welcome}) => {
    const [currentMsg, setCurrentMsg] = useState("");
    const [msgList, setMsgList] = useState([]);

    const handleChat = async () =>{
        if (currentMsg !== ""){
            const msgData ={
                room: room,
                author: name,
                content: currentMsg,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()

            };

            await socket.emit("send_msg", msgData);
            setMsgList((list)=>[...list, msgData]);
        }
        setCurrentMsg("");
        
    }

    useEffect(() =>{
        socket.on("receive_msg", (data) =>{
        setMsgList((list)=>[...list, data]);
        console.log(data);
        

        })
    }, [socket])

    useEffect(()=>{
        socket.on("welcome_msg", (data)=>{
        console.log(data.content);
        setMsgList((list)=>[...list, data]);
    })
  },[socket])

    useEffect(() =>{
        
        setMsgList((list)=>[...list, welcome]);
        
    }, [welcome])
  return (
    <div className='chat-window'>
      <div className='chat-header'>
        <p>Live Chat</p>
      </div>
      <div className='chat-body'>
        <ScrollToBottom className='message-container'>
        {msgList.map((msg, indx)=>{
            return <div className='message' key={indx} id={name===msg.author? "you" : "other"} style={{
                justifyContent:msg.justify
            }}>
                <div>
                    <div className='message-content' style={{backgroundColor:msg.color}}>
                        <p>{msg.content}</p>
                    </div>
                    <div className='message-meta'>
                        <p id="time">{msg.time}</p>
                        <p id="author">{msg.author}</p>
                    </div>
                </div>
            </div>;
        })}
        </ScrollToBottom>
      </div>
      <div className='chat-footer'>
        <input type="text" placeholder="write here.." onChange={(e)=>{setCurrentMsg(e.target.value)}}
        onKeyPress={(e)=>{e.key==="Enter" && handleChat()}} value={currentMsg}/>
        <button onClick={handleChat }>&#9658;</button>
      </div>
      
    </div>
  )
}

export default Chat
