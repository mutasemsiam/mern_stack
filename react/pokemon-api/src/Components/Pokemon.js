import React, { useEffect, useState } from 'react';


export default () => {

    const [pokemon, setPokemon] = useState([]);
    const [done, setDone] = useState(false);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(response => { setPokemon(response.results); })
            
    }, []);

    const handleApi = () => {
        setDone(true);
    }

    return (
        <div>
            <button onClick={handleApi}>Get results</button>

            {done ?
                <>
                    {pokemon.length > 0 && pokemon.map((poke, indx) => {
                        return (<ul> <li key={indx} style={{color:'grey'}}>{poke.name}</li> </ul>)
                    })}
                </> : null
            }

        </div>
    );
}
