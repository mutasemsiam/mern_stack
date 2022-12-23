import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
// import axios from 'axios';
import DeleteButton from './DeleteButton';
import {Button} from '@material-ui/core';
    
const PersonList = (props) => {
    const [peopleList, setPeopleList] = useState([]);
   
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/people')
    //         .then(res => setPeople(res.data.persons));
    // }, [])
    
    const removeFromDom = personId => {
        setPeopleList(peopleList.filter(person => person._id != personId))
    }
    
    useEffect( ()=>{
        setPeopleList(props.people);
    }, [props.people])
    
    return (
        <div>
            {peopleList.map((person, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/" + person._id}>
                            {person.lastName}, {person.firstName}
                        </Link>
                        |
                        <Link to={"/" + person._id + "/edit"}>
                        <Button type="submit" variant="contained" color="primary">Edit</Button>
                            
                        </Link> 
                        |
                       <DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/>
                    </p>
                )
            })}
        </div>
    );
}
    
export default PersonList;

