import React from 'react'
import Nav from './Nav'
import { navigate } from '@reach/router'

const Home = () => {
    const handleButton = () =>{
        navigate('/dashboard');
    }
  return (
    <div>
        {/* <Nav/> */}
      <h1>Welcome</h1>
      {/* <button onClick={handleButton}>Navigate</button> */}
    </div>
  )
}

export default Home
