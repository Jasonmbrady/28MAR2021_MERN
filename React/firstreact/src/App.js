import './App.css';
import BabyUnicorn from './unicorns/BabyUnicorn';
import LightSwitch from './unicorns/LightSwitch';


function App() {
  let names = "Corny"
  const clickHandler = () => {
    if(names === "Corny"){
      names = "MK-II";
    } else {names = "Corny"}
  }
  return (
    <div className="App">
      <Compy>
        <BabyUnicorn name={names} age={100}/> 
        <LightSwitch clickhandler={clickHandler}/>
      </Compy>
    </div>
  );
}

export default App;
