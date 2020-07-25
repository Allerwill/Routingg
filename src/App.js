import React from 'react';
import './App.css';
import  Nav from './views/Nav';
import  About from './views/About';
import  Shop from './views/Shop';
import Contact from './views/Contact';
import Home from "./views/Home";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
      <Router>
        <div className="App">
            <Nav/>
            <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/contact" component={Contact}/>
            </Switch>
        </div>
      </Router>
  );
}


export default App;
