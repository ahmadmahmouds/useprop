import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard.js';

function App() {
  return (
    <div className="App">
      <PersonCard lastName="Doe"  firstName="Jane"  age={45} hairColor="Black" />
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
      <PersonCard firstName="Millard" lastName="FillMore" age={50} hairColor="Brown"/>
      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
      
    </div>
  );
}

export default App;
