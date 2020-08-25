import React from 'react';

import './App.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
return(
  <Router>
  <div className='App'>
    <Nav/>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}></Route>
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
