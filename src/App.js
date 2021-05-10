import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
<<<<<<< HEAD
=======

>>>>>>> b6e6638224b2640850e83890b10c4217d7570180
} from "react-router-dom";
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import SignleDoner from './components/SignleDoner/SignleDoner';

function App() {
  return (
<<<<<<< HEAD
    <div  style={{ backgroundColor: '#172b4d', minHeight:'100vh' }}>
=======
    <div style={{ backgroundColor: '#172b4d', minHeight:'100vh'}}>
>>>>>>> b6e6638224b2640850e83890b10c4217d7570180
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/registration">
            <Registration/>
          </Route>
          <Route path="/singleDoner/:id">
            <SignleDoner/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
