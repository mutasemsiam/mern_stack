import React, { useState } from 'react'


const PlayersForm = (props) => {
    const {initialName, initialPrefPosition, onSubmitProp} = props;
    const [name, setName] = useState(initialName);
    const [prefPosition, setPrefPosition] = useState(initialPrefPosition);

    const onSubmitHandler = e =>{
        e.preventDefault();
        onSubmitProp({name, prefPosition});

    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                <label>Player Name:</label>
                <input
                type="text"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                />
                </p>
                <p>
                <label>Preferred Position:</label>
                <input
                type="text"
                value={prefPosition}
                onChange={(e)=>{setPrefPosition(e.target.value)}} 
                />
                </p>

                {props.errors.map((err, index) => <p key={index} style={{color:'red'}}>{err}</p>)}

                <button>ADD</button>

            </form>

        </div>
    )
}

export default PlayersForm
