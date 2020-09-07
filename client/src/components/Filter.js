import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import DragNDrop from './DragNDrop';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


export default function Filter() {

    const [results, setResults] = useState([]);
    const [refs, setRefs] = useState([]);


    const config = {
        headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjMyZTMwYjc5NmFhYjBhZmM0ZjgwMDciLCJpYXQiOjE1OTcxNzA0ODV9.FlXz-nWVMzNt9gxRNXeQ7sxTYQrRLK2cnNYUon-yrm4"
        }
    };

    const myRefs = useSelector(state => state.ref.filters);

    const onSubmit = () => {
        let targetObj = {
            refs: [...myRefs]
        }
        axios.post("http://localhost:5000/api/users/search", targetObj, config)
            .then(res => {
                setResults(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="main">
                <DragNDrop />
            </div>
            <div className="results">
                <p>{results.length} found matching the targeted references!</p>
                <Button onClick={onSubmit}>Find!</Button>
                {/* {results.length > 0 ? <Link to="/results" className="button" >Results!</Link> : ''} */}
            </div>
            <div className="main">
                <ListGroup flush style={{ margin: '2rem', width: '40vw' }} >
                    <TransitionGroup>
                        {results.map(result => (
                            <CSSTransition timeout={10000} className="fad" key={result.email}>
                                <ListGroupItem style={{ display: 'flex', justifyContent: 'space-between' }} >
                                    <div className="user-info">
                                        <img className="avatar" src="https://kooledge.com/assets/default_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png" />
                                        <p>{result.name}</p>
                                    </div>
                                    <img className="avatar" src="https://maxcdn.icons8.com/Share/icon/p1em/Messaging/message1600.png" />
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </div>
        </>
    );
}