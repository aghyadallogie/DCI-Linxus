import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/layout/AppNavbar';
import Register from './components/Register';
import Filter from './components/Filter';
import Results from './components/Results';
import Home from './components/layout/Home';
import './App.scss';
import Login from './components/Login'
function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/filter" component={Filter} />
          <Route path="/login" component={Login}/>
          {/* <Route path="/results" component={Results} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
