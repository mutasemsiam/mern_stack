import './App.css';
import MyTabs from './Components/MyTabs';
import React, {useState} from 'react';

function App() {
  const [tabs, setTabs] = useState([{
    title: "Tab1",
    content: "This is Tab 1"

  },
{
  title: "Tab2",
  content: "This is Tab 2"
},
{
  title: "Tab3",
  content: "This is Tab 3"
}]);
  return (
    <div className="App">
      <MyTabs tabs = {tabs}></MyTabs>
    </div>
  );
}

export default App;
