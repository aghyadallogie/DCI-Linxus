import React from 'react';
import connections from '../../assets/connections.png';

function About() {
  return (
    <div className="about-page">
      <main className="about-main">
     <h5>About LinxUs</h5>
     <h1>It's just about connections!</h1>
     <div className='about-imag-text'>
       <p className='text-about'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
     
     <img className="connections" src={connections} alt="connections"></img>
     </div>
     </main>
    </div>
  );
}

export default About;
