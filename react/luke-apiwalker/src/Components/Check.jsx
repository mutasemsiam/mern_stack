import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Nav from './Nav';
import Display from './Display';

const Check = ({option, id}) => {
    const [sth, setSth] = useState([]);
    useEffect(() => {
      console.log("thisssss");
        axios.get(`https://swapi.dev/api/${option}/${id}`)
            .then(response => { setSth(response.data);console.log(response.data); })
            .catch(err => { setSth("notFound");console.log(err)});
            
    }, [option, id]);
  return (
    <div>
      <Display result={sth} selected={option}/>
    </div>
  )
}

export default Check
