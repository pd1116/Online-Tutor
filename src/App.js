import './App.css';
import React from 'react';
import Main from './Components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

import Search from './Components/Search/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Login2 from './Components/Login2/Login2';
import Login3 from './Components/Login3.js/Login3';

function App() {
  return (
    <div className="App">
     
 <Router>
<Switch>
          <Route exact path="/">
          <Main></Main>
          </Route>
          <Route path="/home">
          <Main></Main>
          </Route>
          <Route path="/search">
          <Search></Search>
          </Route>
          <Route path="/login3">
          <Login3></Login3>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
          <Route path="/login2">
          <Login2></Login2>
          </Route>
         
        </Switch>
        </Router>
      {/* <Main></Main>
      <Search></Search> */}
    
    </div>
  );
}

export default App;
