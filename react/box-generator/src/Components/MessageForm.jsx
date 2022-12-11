import react, { useState } from 'react';
import DisplayMessage from './DisplayMessage';


const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage(msg);
       
    };

   

    return (

        <form onSubmit={handleSubmit} style={{fontSize:'2em', fontWeight:'bold'}}>
            
            <label>Color:</label>
      
             <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
            <input type="submit" value="Add" />

        </form>

    );
};

export default MessageForm;
