import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { navigate } from '@reach/router';

const Create = () => {
    // const [author, setAuthor] = useState([]);
    // const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);


    const createAuthor = newAuthor => {
        axios.post('http://localhost:8000/api/author', newAuthor)
            .then(res=>{
                console.log(res);
            })
            .then(() => navigate('/'))
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

    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);
  
    return (
    <div>
      <AuthorForm onSubmitProp={createAuthor} initialName="" formErrors = {errors} />
      
    </div>
  )
}

export default Create
