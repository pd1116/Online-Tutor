import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from '@material-ui/core';
import Search from './Components/Search/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
         
        </Switch>
        </Router>
      {/* <Main></Main>
      <Search></Search> */}
    
    </div>
  );
}

export default App;
