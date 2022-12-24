import React from 'react';
import Main from './views/Main';
import './App.css'
import Detail from './views/Detail';
import { Router } from '@reach/router'
import Update from './views/Update';
import Create from './views/Create';
function App() {
  return (
    <div className="App">
      <h1>Favourite Authors</h1>
      <Router>
      <Main path='/'/>
      <Create path='/new' />
      <Detail path='/:something'/>
      <Update path="/:id/edit" />
      </Router>
      
    </div>
  );
}
export default App;

