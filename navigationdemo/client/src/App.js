import {Router} from '@reach/router';
import OneProduct from './components/OneProduct';
import ProductParent from './components/ProductParent';

function App() {
  return (
    <div className="App">
      <Router>
        <OneProduct path="/:id"/>
        <ProductParent path="/"/>
      </Router>
    </div>
  );
}

export default App;
