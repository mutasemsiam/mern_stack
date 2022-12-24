import React from 'react'
import axios from 'axios';
import {Button} from '@material-ui/core';
    
export default props => {
    
    const { authorId, successCallback } = props;
    
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
      
            <Button onClick={deleteAuthor}  variant="contained" color="secondary">Delete</Button>
            
        
    )
}

