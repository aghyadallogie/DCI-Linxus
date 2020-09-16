import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { loadUser } from './redux/actions/authActions';
import AppNavbar from './components/layout/AppNavbar';
import Register from './components/Register';
import Filter from './components/Filter';
import Results from './components/Results';
import Home from './components/layout/Home';
import Contact from './components/layout/Contact';
import Login from './components/auth/Login';
import About from './components/layout/About';
import Account from './components/Account';
import Logout from './components/auth/Logout';

export default function App() {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(loadUser());
  }, [])

  return (
    <div className="App">
      <AppNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        {isAuthenticated ? <>
          <Route path="/filter" component={Filter} />
          <Route path="/logout" component={Logout} />
          <Route path="/account" component={Account} />
          <Route path="/results" component={Results} />
        </> : <>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </>
        }
      </Switch>
    </div>
  );
}