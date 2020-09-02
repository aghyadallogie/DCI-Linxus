import React from 'react';

import './App.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
import User from './components/User';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login';


function App() {
return(
  <Router>
  <div className='App'>
    <Nav/>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/account" component={User}/>
    <Route path="*">
              <div>
                <div>Oops - this page does not exist</div>
                <Link to="/">Back to Login</Link>
              </div>
            </Route>
    </Switch>
   
  </div>
  </Router>
)
 
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1>LINXUS</h1>

  //       <div className="header-separator">
  //         <h3 className="login">About us</h3>
  //         <h3 className="contact">Contact</h3>
  //         <h3 className="login">Log In</h3>
  //       </div>
  //     </header>

  //     <main className="App-main">
  //       <div className="text-div">
  //         <h1 className="intro">
  //           You like a certain activity but you got nobody to share the fun
  //           with?
  //         </h1>
  //         <p>Less personal data from you, more connections from us.</p>
  //         <button>Sign up!</button>
  //       </div>
  //       <img className="chatbot" src={chatbot} alt="animation"></img>
  //     </main>
  //   </div>
  // );
}

export default App;
