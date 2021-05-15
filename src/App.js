import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import SignleDoner from './components/SignleDoner/SignleDoner';
import DonateInfo from './components/DonateInfo';

function App() {
  return (
    <div  >
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
          <Route path="/info">
            <DonateInfo/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
