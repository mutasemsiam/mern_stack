import React, { useState } from 'react'
import Nav from '../components/Nav'
import PlayersForm from '../components/PlayersForm'
import axios from 'axios';
import { navigate } from '@reach/router';

const CreatePlayer = () => {

    const [errors, setErrors] = useState([])

    const createPlayerFunction = newPlayer =>{
        axios.post('http://localhost:8000/api/player', newPlayer)
        .then(res=>{
            console.log(res);
        })
        .then(() => navigate('/players/list'))
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }

  return (
    <div>
      <Nav/>
      <div style={{border:'2px solid black', width:'50%', margin:'0 auto'}}>
      <p>Add Player:</p>
      <PlayersForm onSubmitProp={createPlayerFunction} initialName="" initialPrefPosition="" errors={errors}/>
      </div>
    </div>
  )
}

export default CreatePlayer
