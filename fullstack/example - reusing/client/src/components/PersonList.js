import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
    
const PersonList = (props) => {
    const [people, setPeople] = useState([]);
   
    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => setPeople(res.data.persons));
    }, [])
    
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId))
    }
    
    useEffect( ()=>{
        setPeople(props.people);
    }, [props.people])
    return (
        <div>
            {people.map((person, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/" + person._id}>
                            {person.lastName}, {person.firstName}
                        </Link>
                        |
                        <Link to={"/" + person._id + "/edit"}>
                            Edit
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
