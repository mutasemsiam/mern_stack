import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';

const myStyle = {
  backgroundColor: '#dddddd',
  width: 'auto',
  margin: '20px',
  borderStyle: 'solid',
  textAlign: 'left',
}

function App() {
  return (
    <div className="App" style={myStyle}>

      <Header fname="Siam" />
      <div style={{display:'flex'}}>
        <Navigation />
        <Main>
          <div style={{display:'flex'}}>
          <SubContents />
          <SubContents />
          <SubContents />
          </div>
          <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;

