import React from 'react';
import chatbot from '../../assets/chatbot.png';
import { Link } from 'react-router-dom';
import { Container, Col, Button } from 'reactstrap';

function Home() {
  return (
    <div className="main">
      <Col lg="4">
        <h1 className="intro">
          You like a certain activity but you got nobody to share the fun
          with?
          </h1>
        <p>Less personal data from you, more connections from us.</p>
        <Link to="/register">
          <Button size="lg">Sign up!</Button>
        </Link>
      </Col>
      <Col lg="4">
        <img className="chatbot" src={chatbot} alt="animation"></img>
      </Col>
    </div>
  );
}

export default Home;