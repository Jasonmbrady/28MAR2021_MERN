import Main from "./components/Main";
import UpdatePerson from "./components/UpdatePerson"
import {Router} from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <UpdatePerson path="/update/:id"/>
      </Router>
    </div>
  );
}

export default App;
