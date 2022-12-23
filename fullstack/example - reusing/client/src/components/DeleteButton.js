import React from 'react'
import axios from 'axios';
import {Button} from '@material-ui/core';
    
export default props => {
    
    const { personId, successCallback } = props;
    
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        // <button onClick={deletePerson}>Delete
        // </button>
            <Button onClick={deletePerson}  variant="contained" color="secondary">Delete</Button>
            
        
    )
}

