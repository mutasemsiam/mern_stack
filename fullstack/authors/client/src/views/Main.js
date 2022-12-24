import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
export default () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthor(res.data)
                setLoaded(true);
            });
    }, [])
  
    // const createAuthor = newAuthor => {
    //     axios.post('http://localhost:8000/api/author', newAuthor)
    //         .then(res=>{
    //             setAuthor([...author, res.data]);
    //         })
    //         .catch(err=>{
    //             const errorResponse = err.response.data.errors; // Get the errors from err.response.data
    //             const errorArr = []; // Define a temp error array to push the messages in
    //             for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
    //                 errorArr.push(errorResponse[key].message)
    //             }
    //             // Set Errors
    //             setErrors(errorArr);
    //         })
                

           
    // }
    return (
        <div>
            {/* <AuthorForm onSubmitProp={createAuthor} initialName="" formErrors = {errors} /> */}
            <hr />
            {loaded && <AuthorList author={author} />}
        </div>
    )
}

