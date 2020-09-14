import React from 'react';
import chatbot from '../../assets/chatbot.png';
import { Link, Redirect } from 'react-router-dom';
import { Container, Col, Button } from 'reactstrap';
import { useSelector } from 'react-redux';

function Home() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  if (isAuthenticated) return <Redirect to="/filter" />

  return (
    <div className="main">
      <div className='text-div'>
        <h1 className="intro">
          You like a certain activity but you got nobody to share the fun
          with?
          </h1>
        <p>Less personal data from you, more connections from us.</p>
        <Link to="/register">
          <button className='warning'>Sign up!</button>
        </Link>
      </div>
      <Col lg="4">
        <img className="chatbot" src={chatbot} alt="animation"></img>
      </Col>
    </div>
  );
}

export default Home;