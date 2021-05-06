import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import SignleDoner from './components/SignleDoner/SignleDoner';

function App() {
  return (
    <div >
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
