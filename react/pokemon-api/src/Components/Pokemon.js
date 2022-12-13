import React, { useEffect, useState } from 'react';


export default () => {

    const [people, setPeople] = useState([]);
    const [done, setDone] = useState(false);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(response => { setPeople(response.results); })
            
    }, []);

    const handleApi = () => {
        setDone(true);
    }

    return (
        <div>
            <button onClick={handleApi}>Get results</button>

            {done ?
                <>
                    {people.length > 0 && people.map((person, index) => {
                        return (<div key={index}>{person.name}</div>)
                    })}
                </> : null
            }

        </div>
    );
}
