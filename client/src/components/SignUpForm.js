import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { registerAction } from '../redux/actions/authActions';

export default function SignUpForm({ props }) {

    const { handleSubmit, register, errors } = useForm();
    const dispatch = useDispatch();
    const myRefs = useSelector(state => state.ref.filters);

    const onSubmitForm = values => {
        let registerData = {
            refs: [...myRefs],
            ...values
        }

        if (myRefs.length > 0) {
            dispatch(registerAction(registerData)); // dispatching type and payload inside this dispatched action
        } else {
            alert('please enter at least one interest!')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="input-field">
                    <label htmlFor="name" ></label>
                    <input type="text" name="name" autoComplete="off" placeholder="Username" ref={register({
                        required: true, minLength: 8
                    })} />
                    {errors.name && <p className="form-error">At least 8 characters long!</p>}
                </div>
            
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <input type="email" name="email" autoComplete="off" placeholder="Email" ref={register({
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
                    <input type="password" name="password" autoComplete="off" placeholder="Password" ref={register({ // breaks why type="password" !!!!
                        required: true, minLength: 8
                    })} />
                    {errors.password && <p className="form-error">At least 8 characters long!</p>}
                </div>
           
            <button type="submit" className='warning' style={{ marginBottom: '2rem' }} >
                Join Us!
            </button>
        </form>
    )
}