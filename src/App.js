import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import SignleDoner from './components/SignleDoner/SignleDoner';

function App() {
  return (
    <div style={{ backgroundColor: '#172b4d', minHeight:'100vh'}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/registration">
            <Registration/>
          </Route>
          <Route path="/doner/:id">
            <SignleDoner/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
