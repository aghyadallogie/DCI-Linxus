import React, { Component } from 'react';
import { BrowserRouter as  Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    loginSuccessful: false
  };

  handleCredentialChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.username === 'admin' && this.state.password === 'admin123') {
      this.setState({ loginSuccessful: true, errors: '' });
    } else {
      this.setState({ errors: 'Credentials are not correct' });
    }
  };

  render() {
    // redirect in case the login credentials were correct
    if (this.state.loginSuccessful) {
      return <Redirect to="/account" />;
    }

    return (
      <form onSubmit={this.handleSubmit} autoComplete="off" className="form-login">
        
          <div className='field'>
          <div className="login-details">
            <input type="text" onChange={this.handleCredentialChange} name="username" placeholder=" username" />
            <input type="password" onChange={this.handleCredentialChange} name="password" placeholder=" password" />
            <button type="submit" className='register'>Log in</button>
            <h3 className='reg'>Do not have an account?</h3> 
            <Link  to="/register">
            <button type="submit" className='register'>Register here</button>
      </Link>
            
          </div>
          
          <div className="errors">{this.state.errors}</div>
          </div>
      </form>
    );
  }
}

export default LoginForm;