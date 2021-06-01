// import './App.css';
import {Router} from '@reach/router';
import Navbar from './components/Navbar';
import PokemonPic from './components/PokemonPic';
import PokemonStat from './components/PokemonStat';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <PokemonPic path="/" />
        <PokemonStat path="/stats" />
      </Router>
    </div>
  );
}

export default App;
