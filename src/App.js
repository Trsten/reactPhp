import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
        <Route path="/" exact component={ Login }/>
          <Route path="/login" exact component={ Login }/>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
