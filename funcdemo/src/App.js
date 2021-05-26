import './App.css';
import {useState} from 'react';
import Counter from './components/Counter';
import PersonCard from './components/PersonCard';
import BirthdayButton from './components/BirthdayButton';
import UserForm from './components/UserForm';

function App() {
  const [myAge, setMyAge] = useState(41);

  return (
    <div className="App">

      <PersonCard fName={"Jason"} lName={"Brady"} age={myAge} hair={"very little"}/>
      <BirthdayButton getAge={myAge} setAge={setMyAge}/>
      
      <Counter />
      <UserForm />
      
    </div>
  );
}

export default App;
