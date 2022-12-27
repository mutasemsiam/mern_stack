import './App.css';
import CreatePlayer from './views/CreatePlayer';
import { Router } from '@reach/router'
import PlayersList from './views/PlayersList';
import ManageStatus from './views/ManageStatus';

function App() {
  return (
    <div className="App">
      <Router>
      <CreatePlayer path="/players/addplayer"/>
      <PlayersList path="/players/list"/>
      <ManageStatus path="/status/game/:id"/>
      </Router>
     
    </div>
  );
}

export default App;


{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}