import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login.js';


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
