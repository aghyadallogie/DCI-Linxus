import React from 'react';
import chatbot from '../chatbot.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
      <div>
    <main className="App-main">
         <div className="text-div">
           <h1 className="intro">
             You like a certain activity but you got nobody to share the fun
             with?
          </h1>
           <p>Less personal data from you, more connections from us.</p>
           <Link to="/register">
           <button>Sign up!</button>
           </Link>
         </div>
         <img className="chatbot" src={chatbot} alt="animation"></img>
      </main>
      </div>
  );
}

export default Home;