import React from 'react';
import Main from './views/Main';
import './App.css'
import Detail from './views/Detail';
import { Router } from '@reach/router'
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Router>
      <Main path='/'/>
      <Detail path='/:something'/>
      <Update path="/people/:id/edit" />
      </Router>
      
    </div>
  );
}
export default App;

