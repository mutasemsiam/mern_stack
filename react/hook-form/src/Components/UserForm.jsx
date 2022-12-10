import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const validateName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("First name must be 3 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
       
    };

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={validateName} value={firstName} />
                    {
                    firstNameError ?
                    <p className='text-danger'>{ firstNameError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} value={ConfirmPassword} />
                </div>
                <input type="submit" value="Create User" />

            </form>
            <h3>First name: {firstName}</h3>
            <h3>Last name: {lastName}</h3>
            <h3>Email: {email}</h3>
            <h3>Password: {password}</h3>
            <h3>CP: {ConfirmPassword}</h3>
        </div>
    );
};


export default UserForm;
