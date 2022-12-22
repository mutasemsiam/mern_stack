import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => {
                setPeople(res.data.persons)
                setLoaded(true);
            });
    }, [])
  
    const createPerson = Newperson => {
        axios.post('http://localhost:8000/api/people', Newperson)
            .then(res=>{
                setPeople([...people, res.data.person]);
            })
                

           
    }
    return (
        <div>
            <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName="" />
            <hr />
            {loaded && <PersonList people={people} />}
        </div>
    )
}

