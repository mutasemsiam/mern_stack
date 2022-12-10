import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
      <PersonCard firstName="Mutasem" lastName="Siam" age={ 20 } hairColor="Brown" /> 
      <PersonCard firstName="Jack" lastName="Smith" age={ 32 } hairColor="Black" /> 
      <PersonCard firstName="Jim" lastName="Jo" age={ 12 } hairColor="Red" /> 


    </div>
  );
}

export default App;
