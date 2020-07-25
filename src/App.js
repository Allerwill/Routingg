import React from 'react';
import './App.scss';
import  Nav from './views/Nav';
import  About from './views/About';
import  Tour from './views/Tour';
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
            <Route path="/tour" component={Tour}/>
            <Route path="/contact" component={Contact}/>
            </Switch>
            <footer>FIT-TDC &copy; 2020</footer>
        </div>
      </Router>

  );
}


export default App;
