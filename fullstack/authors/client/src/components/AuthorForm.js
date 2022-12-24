import React, { useState } from 'react';
import {Paper, Button} from '@material-ui/core';
import { Link, navigate } from '@reach/router';
export default props => {
    const { initialName, onSubmitProp, cancel } = props;
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

                  {/* <Button onClick={()=>navigate('/')} type="submit" variant="contained" 
                    color="primary">Cancel</Button>  */}
                    <Button  variant="contained" 
                    color="primary"><Link to="/" style={{textDecoration:'none', color:'white'}}>Cancel</Link>
                    </Button> 
                    |
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                    
                </form>
            </Paper>
        </>
    )
}

