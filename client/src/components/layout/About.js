import React from 'react';
import connections from '../../assets/connections.png';

function About() {
  return (
    <div className="about-page">
      <main className="about-main">
        <h1>It's just about connections!</h1>
        <div className='about-imag-text'>
          <p className='text-about'>We came up with the idea of  connecting people with similar interests…
          We know it has been done before… but can we do it simpler, straight to the point and with less personal data? &nbsp; Yes we can!</p>
          <img className="connections" src={connections} alt="connections"></img>
        </div>
      </main>
    </div>
  );
}

export default About;
