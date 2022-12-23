import React, { useState } from 'react';
import {Paper, Button} from '@material-ui/core';
export default props => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ firstName, lastName });

    }

    return (
        <>
            <Paper elevation={3}>
                <form onSubmit={onSubmitHandler}>
                    <p>
                        <label>First Name</label><br />
                        <input
                            type="text"
                            name="firstName" value={firstName}
                            onChange={(e) => { setFirstName(e.target.value) }} />
                    </p>
                    <p>
                        <label>Last Name</label><br />
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }} />
                    </p>
                 
                    {props.formErrors.map((err, index) => <p key={index}>{err}</p>)}

                    {/* <input type="submit" /> */}
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Paper>
        </>
    )
}

