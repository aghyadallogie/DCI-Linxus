import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Axios from 'axios';

export const Entries = ({ users, loading }) => {

    const userId = useSelector(state => state.auth.user);
    console.log('entries: ', userId);
    if (loading) return <h3>Loading ..</h3>;

    const handleMail = () => {

        const body = JSON.stringify({ userId });
        const headers = {
            "Content-type": "application/json"
        }

        Axios.post("http://localhost:5000/api/mail", userId, headers);
    }

    return (
        <ul className="list-group mb-4">
            {users.filter(user => user._id !== userId).map(user =>
                <CSSTransition timeout={10000} className="fad" key={user.email}>
                    <ListGroupItem style={{ display: 'flex', justifyContent: 'space-between' }} >
                        <div className="user-info">
                            <img className="avatar" src={`http://localhost:5000/avatars/${userId._id}.jpg`} />
                            <p>{user.name}</p>
                        </div>
                        <img className="avatar pt-1" onClick={handleMail} src="https://maxcdn.icons8.com/Share/icon/p1em/Messaging/message1600.png" />
                    </ListGroupItem>
                </CSSTransition>
            )}
        </ul>
    )
}
