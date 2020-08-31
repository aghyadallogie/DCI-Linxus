import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/layout/Nav';
import Home from './components/layout/Home';
import About from './components/layout/About';
import Contact from './components/layout/Contact';
import Results from './components/Results';
import Filter from './components/Filter';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

export default function App() {

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/results" component={Results} />
          <Route path="/filter" component={Filter} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>

  );
}
