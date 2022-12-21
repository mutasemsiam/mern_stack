import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

const Main = (props) => {
    const [ message, setMessage ] = useState("Loading...")
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))       
    }, []);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data.persons);
                setLoaded(true);
                console.log("tryy")
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
    }

    const addToDom = newPerson => {
      
        setPeople([...people, newPerson]);
    }

    return (
        <div >
            <h2>Message from the backend: {message}</h2>
            <PersonForm addToDom={addToDom}/>
            <hr/>
            {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;

