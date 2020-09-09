import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DragNDrop from './DragNDrop';
import { Button } from 'reactstrap';
import { searchUsersAction } from '../redux/actions/refActions';


export default function Filter(props) {

    const config = {
        headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjMyZTMwYjc5NmFhYjBhZmM0ZjgwMDciLCJpYXQiOjE1OTcxNzA0ODV9.FlXz-nWVMzNt9gxRNXeQ7sxTYQrRLK2cnNYUon-yrm4"
        }
    };

    const myRefs = useSelector(state => state.ref.filters);

    const dispatch = useDispatch();

    const myUsers = useSelector(state => state.user.matchingUsers);

    const [numnum, setNumnum] = useState(0);

    useEffect(() => {
        // we need to reset matchingUsers here before redoing
        setNumnum(myUsers);
    }, [myRefs])

    const onSubmit = () => {
        let targetObj = {
            refs: [...myRefs]
        }
        try {
            dispatch(searchUsersAction(targetObj, config));
            props.history.push('/results');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="main">
                <DragNDrop />
            </div>
            <div className="results">
                <p>{numnum.length} found matching the targeted references!</p>
                <Button onClick={onSubmit}>Find!</Button>
            </div>
        </>
    );
}