import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="secret">
        <p>The secret admin area</p>
        <Link to="/login">Back to Homepage</Link>
      </div>
    );
  }
}

export default User;
