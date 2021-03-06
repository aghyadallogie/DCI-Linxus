import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function SignUpForm({ refs, props }) {

    const { handleSubmit, register, errors } = useForm();

    const config = {
        headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjMyZTMwYjc5NmFhYjBhZmM0ZjgwMDciLCJpYXQiOjE1OTcxNzA0ODV9.FlXz-nWVMzNt9gxRNXeQ7sxTYQrRLK2cnNYUon-yrm4"
        }
    };

    const onSubmit = values => {
        let targetObj = {
            refs: [...refs],
            ...values
        }
        axios.post("http://localhost:5000/api/auth/register", targetObj, config)
            .then(res => {
                console.log(res);
                props.history.push('/filter');
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="input-field">
                <label htmlFor="name" ></label>
                <input name="name" placeholder="Username" ref={register({
                    required: true, minLength: 8
                })} />
                {errors.name && <p className="form-error">At least 8 characters long!</p>}
            </div>

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
                <input type="text" name="password" placeholder="Password" ref={register({ // breaks why type="password" !!!!
                    required: true, minLength: 8
                })} />
                {errors.password && <p className="form-error">At least 8 characters long!</p>}
            </div>

            <button type="submit">Join Us!</button>
        </form>
    )
}