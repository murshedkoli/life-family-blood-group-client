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
import Login from './components/Admin/Login';
import PrivateRoute from './components/Admin/PrivateRoute';
import Adminpan from './components/Admin/Adminpan';
import Heder from './components/Header/Heder';

function App() {
  return (
    <div  style={{ backgroundColor: '#172b4d', minHeight:'100vh' }}>
      <Router>
        <Heder/>
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
          <Route path="/login">
          <Login/>
          </Route>
          <PrivateRoute path="/admin">
            <Adminpan/>
          </PrivateRoute>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
