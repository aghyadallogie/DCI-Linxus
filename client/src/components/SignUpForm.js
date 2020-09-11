import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { Button, Container, Form, FormGroup, Label, input } from 'reactstrap';
import axios from 'axios';
import { registerUser } from '../redux/actions/authActions';
import { REGISTER_SUCCESS } from '../redux/actions/types';

export default function SignUpForm({ props }) {

    const { handleSubmit, register, errors } = useForm();

    const dispatch = useDispatch();

    const config = {
        headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjMyZTMwYjc5NmFhYjBhZmM0ZjgwMDciLCJpYXQiOjE1OTcxNzA0ODV9.FlXz-nWVMzNt9gxRNXeQ7sxTYQrRLK2cnNYUon-yrm4"
        }
    };

    const myRefs = useSelector(state => state.ref.filters);

    const onSubmitForm = values => {
        let registerData = {
            refs: [...myRefs],
            ...values
        }
        dispatch(registerUser(registerData)); // dispatching type and payload inside this dispatched action
    }

    return (

        <form onSubmit={handleSubmit(onSubmitForm)}>
            <FormGroup>
                <div className="input-field">
                    <Label htmlFor="name" ></Label>
                    <input name="name" placeholder="Username" ref={register({
                        required: true, minLength: 8
                    })} />
                    {errors.name && <p className="form-error">At least 8 characters long!</p>}
                </div>
            </FormGroup>
            <FormGroup>
                <div className="input-field">
                    <Label htmlFor="email"></Label>
                    <input name="email" placeholder="Email" ref={register({
                        required: true, pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid Email Address!"
                        }
                    })}
                    />
                    {errors.email && <p className="form-error">Must enter a valid Email!</p>}
                </div>
            </FormGroup>
            <FormGroup>
                <div className="input-field">
                    <Label htmlFor="password" ></Label>
                    <input type="password" name="password" placeholder="Password" ref={register({ // breaks why type="password" !!!!
                        required: true, minLength: 8
                    })} />
                    {errors.password && <p className="form-error">At least 8 characters long!</p>}
                </div>
            </FormGroup>
            <Button type="submit" color="dark" style={{ marginBottom: '2rem' }} >
                Join Us!
            </Button>
        </form>

    )
}