import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import chatbot2 from '../assets/chatbot2.png'
function Login(props) {

  const { handleSubmit, register, errors } = useForm();

  const config = {
    headers: {
      "Content-Type": "application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjMyZTMwYjc5NmFhYjBhZmM0ZjgwMDciLCJpYXQiOjE1OTcxNzA0ODV9.FlXz-nWVMzNt9gxRNXeQ7sxTYQrRLK2cnNYUon-yrm4"
    }
  };

  const onSubmit = values => {
    axios.post("http://localhost:5000/api/auth/login", values, config)
      .then(res => {
        props.history.push('/filter');
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="main-login"
        style={{
         backgroundImage: `url(${chatbot2})`
      }}>
      <form onSubmit={handleSubmit(onSubmit)} className='form-login'>
        <div className="input-field">
          <label htmlFor="email"></label>
          <input name="email" placeholder="Email" ref={register({
            required: true, pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid Email Address!"
            }
          })}
          />
          {errors.email && <p className="form-error">Must enter a valid Email!</p>}
        </div>

        <div className="input-field">
          <label htmlFor="password" ></label>
          <input type="password" name="password" placeholder="Password" ref={register({ // breaks why type="password" !!!!
            required: true, minLength: 8
          })} />
          {errors.password && <p className="form-error">At least 8 characters long!</p>}
        </div>

        <button type="submit" className='button-login'>Login</button>
      </form>
    </div>
  );
}

export default Login;