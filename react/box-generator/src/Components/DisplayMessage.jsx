import React from 'react'

const DisplayMessage = (props) => {
   
     
    return (
        <>
         <p>
        {props.message.map(box => (
          <p key={box.x} style={{backgroundColor:box.y, height:'150px',width:'150px',
          display: 'inline-block', margin:'10px',}}></p>
          
        )) }
        
      </p>
     
        </>
    );
};

export default DisplayMessage
