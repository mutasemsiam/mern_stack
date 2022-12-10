import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const validateFName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters!");
        } 
        else {
            setFirstNameError("");
        }
    }
    const validateLName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters!");
        } 
        else {
            setLastNameError("");
        }
    }
    const validateEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2) {
            setEmailError("Email must be at least 2 characters!");
        } 
        else {
            setEmailError("");
        }
    }
    const validatePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        } 
        else {
            setPasswordError("");
        }
    }
    const validateCP = (e) => {
        setConfirmPassword(e.target.value);
        console.log(password);
        if(e.target.value != {password}) {
            setConfirmPasswordError("Email must match!");
            // console.log(e.target.value);
            if(e.target.value=== password){
                // console.log("True");
                setConfirmPasswordError("");
            }
        } 
    
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
       
    };

    return (
        <div>
            <form onSubmit={createUser}>
            {
                    hasBeenSubmitted ?
                    <p>Thank you for applying!</p> :
                    <p>Welcome, please fill this form:</p>
                }
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e)=>validateFName(e)} value={firstName} />
                    {
                    firstNameError ?
                    <p className='text-danger'>{ firstNameError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={validateLName} value={lastName} />
                    {
                    lastNameError ?
                    <p className='text-danger'>{ lastNameError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={validateEmail} value={email} />
                    {
                    emailError ?
                    <p className='text-danger'>{ emailError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={validatePassword} value={password} />
                    {
                    passwordError ?
                    <p className='text-danger'>{ passwordError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={validateCP} value={ConfirmPassword} />
                    {
                    confirmPasswordError ?
                    <p className='text-danger'>{ confirmPasswordError }</p> :
                    ''
                }
                </div>
                <input type="submit" value="Create User" />

            </form>
           
        </div>
    );
};


export default UserForm;