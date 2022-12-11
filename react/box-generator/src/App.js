
import './App.css';
import MessageForm from './Components/MessageForm';
import DisplayMessage from './Components/DisplayMessage';
import react, { useState } from 'react';

function App() {
  const [currentMsg, setCurrentMsg] = useState([]);

  const youveGotMail = (newMessage) => {
    setCurrentMsg([
      { x: currentMsg.length, y: newMessage },
      ...currentMsg, 
    ]);;
  } 


  return (
    <div className="App">
      <MessageForm onNewMessage={youveGotMail} />
      <DisplayMessage message={currentMsg} />
    </div>
  );

}

export default App;
