import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './Components/Home';
import Dash from './Components/Dash';


function App() {
  return (
    <div className="App">
      
     <Router>
    <Home path="/" />
    <Dash path="/:something" />
    <Dash path="/:something/:color/:bColor" />
  </Router>
    </div>
  );
}

export default App;
