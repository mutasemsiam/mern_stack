import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default () => {

    const [pokemon, setPokemon] = useState([]);
    const [done, setDone] = useState(false);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(response => { setPokemon(response.data.results);console.log(response); })
            .catch(response => console.log("error"));
            
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