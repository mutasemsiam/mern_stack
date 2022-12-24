import React, { useState } from 'react';
import {Paper, Button} from '@material-ui/core';
export default props => {
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name });

    }

    return (
        <>
            <Paper elevation={3}>
                <form onSubmit={onSubmitHandler}>
                    <p>
                        <label>Name</label><br />
                        <input
                            type="text"
                            name="name" value={name}
                            onChange={(e) => { setName(e.target.value) }} />
                    </p>
                 
                    {props.formErrors.map((err, index) => <p key={index}>{err}</p>)}

                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Paper>
        </>
    )
}

