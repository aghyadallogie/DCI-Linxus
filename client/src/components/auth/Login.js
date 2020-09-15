import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { loginAction } from '../../redux/actions/authActions';
import backgroundImage from '../../assets/backgroundImage.png';
import { Link, Redirect } from 'react-router-dom';

export default function Login(props) {

  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();

  const errorMsg = useSelector(state => state.auth.errorMsg);

  const onSubmitForm = values => {
    dispatch(loginAction(values));
  }

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  if (isAuthenticated) return <Redirect to="/filter" />

  return (
    <div className="main-login"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}>
      <form onSubmit={handleSubmit(onSubmitForm)} className='form-login'>
        <div className="input-field">
          <label htmlFor="email"></label>
          <input name="email" autoComplete="off" placeholder="Email" ref={register({
            required: true, pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid Email Address!"
            }
          })}
          />
          {errors.email && (
            <p className="form-error">Must enter a valid Email!</p>
          )}
        </div>

        <div className="input-field">
          <label htmlFor="password" ></label>
          <input type="password" autoComplete="off" name="password" placeholder="Password" ref={register({ // breaks why type="password" !!!!
            required: true, minLength: 8
          })} />
          {errors.password && <p className="form-error">At least 8 characters long!</p>}
          {errorMsg && <p className="form-error">{errorMsg}</p>}
        </div>

        <button type="submit" className='warning'>Login</button>
      </form>
      <div className="register-new">
        <h3>New on LinxUs?</h3>
        <Link to="/register">
          <a className='sign-up'>Sign up!</a>
        </Link>
      </div>
    </div>
  );
}