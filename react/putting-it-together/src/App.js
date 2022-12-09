import logo from './logo.svg';
import './App.css';
import BirthIncrement from './components/BirthIncrement'

function App() {
  return (
    <div className="App">
      <BirthIncrement firstName="Mutasem" lastName="Siam" hairColor="Black" age={20}></BirthIncrement>
      <BirthIncrement firstName="Ahmad" lastName="Siam" hairColor="Black" age={22}></BirthIncrement>
    </div>
  );
}

export default App;
