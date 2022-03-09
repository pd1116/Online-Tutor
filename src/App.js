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

import Register from './Components/Register/Register';


import Post from './Components/Post/Post';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Components/FirebaseConfig/AuthProvider';
import Login from './Components/Login/Login';

import AllRes from './Components/UsefullinfoDetails/AllRes';
import Qus1 from './Components/UsefullinfoDetails/Qus1';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/post">
              <Post></Post>
            </PrivateRoute>


{/* all resource */}
            <Route path="/res">
          <AllRes></AllRes>
            </Route>
            <Route path="/qus1">
          <Qus1></Qus1>
            </Route>


          </Switch>
        </Router>


      

      </AuthProvider>
      

    
    </div>
  );
}

export default App;
