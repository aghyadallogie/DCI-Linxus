import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DragNDrop from './DragNDrop';
import { Button } from 'reactstrap';
import { searchUsersAction } from '../redux/actions/refActions';
import { Redirect } from 'react-router-dom';


export default function Filter(props) {

    const [error, setError] = useState('');

    const config = {
        headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjMyZTMwYjc5NmFhYjBhZmM0ZjgwMDciLCJpYXQiOjE1OTcxNzA0ODV9.FlXz-nWVMzNt9gxRNXeQ7sxTYQrRLK2cnNYUon-yrm4"
        }
    };

    const myRefs = useSelector(state => state.ref.filters);

    const dispatch = useDispatch();

    const onSubmit = () => {
        let targetObj = {
            refs: [...myRefs]
        }
        try {
            dispatch(searchUsersAction(targetObj, config));
            if (myRefs.length > 0) {
                props.history.push('/results');
            } else {
                setError('Please enter at least one interest!');
            }
        } catch (error) {
            console.log(error); // does it make sense to use dispatch here as well ?
        }
    }

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    if (!isAuthenticated) return <Redirect to="/" />

    return (
        <>
            <div className="main coll">
                <h1 className="text-primary mb-4"> Find Contacts !</h1>
                <h3 style={{ paddingBottom: '50px', marginBottom: '40px' }}>Drag and drop the interests according to which you want to find contacts!</h3>
                <DragNDrop />
            </div>
            <div className="results">
                {error && <p className="form-error" style={{ textAlign: "center" }}>{error}</p>}
                <button className="warning mt-0" onClick={onSubmit}>Find!</button>
            </div>
        </>
    );
}