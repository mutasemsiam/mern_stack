import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import DeleteButton from '../components/DeleteButton';
import { navigate } from '@reach/router';
const Update = (props) => {


    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + props.id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, []);

    const updatePerson = person => {
        axios.put('http://localhost:8000/api/people/' + props.id, person)
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
            <h1>Update a Person</h1>
            {loaded && (
                <>
                    <PersonForm
                        onSubmitProp={updatePerson}
                        initialFirstName={person.firstName}
                        initialLastName={person.lastName}
                        formErrors={errors}
                    />
                    <DeleteButton personId={person._id} successCallback={() => navigate("/")} />
                </>
            )}
        </div>
    )
}

export default Update;

