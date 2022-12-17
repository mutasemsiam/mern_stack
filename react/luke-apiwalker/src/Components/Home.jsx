import React from 'react'
import Check from './Check'
import Nav from './Nav'
import { Router } from "@reach/router";

const Home = () => {
  return (
    <div>
      <Nav/>
      <Router>
      <Check path="/:option/:id" />
      </Router>
      
    </div>
  )
}

export default Home
