import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from '@material-ui/core';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
      <Main></Main>
      <Search></Search>
    
    </div>
  );
}

export default App;
