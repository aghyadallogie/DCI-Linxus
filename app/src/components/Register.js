import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div>
    <div className="user-details">
      <div className="image-text">
        <div className="user-info">
          <form>
        <input placeholder='username'></input>
        <input placeholder='password' ></input>
        <input placeholder='email'></input>
        </form>
        </div>
      </div>

      <div className="filter-container">
        <input className='filter-user' placeholder='filter references here'></input>
      </div>
    </div>
   
  </div>
  );
}

export default Register;