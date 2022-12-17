import { navigate } from '@reach/router';
import React, { useState } from 'react'
// import axios from 'axios';
import Check from './Check';

const Nav = () => {
    const [option, setOption] = useState("people");
    const [id, setId] = useState();
    // const [sth, setSth] = useState();

    const handleSearch = (e) =>{
        e.preventDefault();
        console.log(option);
        console.log(id);
        navigate(`/${option}/${id}`)

    }


  return (
    <div>
      <form onSubmit={handleSearch}>
      <label>Search for: </label>
      <select onChange={(e) => setOption(e.target.value)}>
        <option>people</option>
        <option>planets</option>
        <option>starships</option>
      </select>
      <label>ID: </label>
      <input type="number" onChange={(e) => setId(e.target.value) }></input>
      <button >Search</button>
      </form>
    </div>
  )
}

export default Nav
