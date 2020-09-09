import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/layout/AppNavbar';
import Register from './components/Register';
import Filter from './components/Filter';
import Results from './components/Results';
import Home from './components/layout/Home';
<<<<<<< HEAD
import './App.scss';
import Login from './components/Login'
=======
import './App.css';
import Contact from './components/layout/Contact';

>>>>>>> 5f5a21eb2343f6c059a67db03bd40ab2ca05081e
function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/filter" component={Filter} />
<<<<<<< HEAD
          <Route path="/login" component={Login}/>
          {/* <Route path="/results" component={Results} /> */}
=======
          <Route path="/contact" component={Contact} />
          <Route path="/results" component={Results} />
>>>>>>> 5f5a21eb2343f6c059a67db03bd40ab2ca05081e
        </Switch>
      </div>
    </Router>
  );
}

export default App;
