import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';
import { Link, navigate } from '@reach/router';
const Update = (props) => {


    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + props.id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, []);

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + props.id, author)
            .then(res => console.log(res))
            .then(() => navigate(`/${props.id}`))
            .catch(err => {
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
            <Link to='/'>Home</Link>
            <p>Edit this Author</p>
            {loaded && (
                <>
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialName={author.name}
                        formErrors={errors}
                       
                    />
                    
                    <DeleteButton authorId={author._id} successCallback={() => navigate("/")} />
                   
                </>
            )}
        </div>
    )
}

export default Update;

