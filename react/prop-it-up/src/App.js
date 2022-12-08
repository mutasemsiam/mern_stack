import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className='App'>
   <PersonCard firstName={"Mutasem"} lastName={"Siam"} age={20} hairColor={"Black"} />
   <PersonCard firstName={"Ali"} lastName={"Mohammad"} age={23} hairColor={"Black"} />
   <PersonCard firstName={"Mohammad"} lastName={"Siam"} age={15} hairColor={"Black"} />
   <PersonCard firstName={"Ahmad"} lastName={"Siam"} age={2} hairColor={"Black"}> </PersonCard>
   </div>
  );
}

export default App;
