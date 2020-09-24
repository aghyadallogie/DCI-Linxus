import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ListGroupItem } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
import Axios from 'axios';

export const Entries = ({ users, loading }) => {

    const userId = useSelector(state => state.auth.user);
    const [mailStatus, setMailStatus] = useState('');

    const handleMail = user => {
        const headers = {
            "Content-type": "application/json"
        }
        Axios.post("http://localhost:5000/api/mail", { user, userId }, headers)
            .then(res => { 
                setMailStatus(res.data); 
                setTimeout(() => setMailStatus(''), 2000); 
            }).catch(err => console.log(err));
    }

    return (
        <ul className="list-group mb-4">
            <p className="form-success">{mailStatus}</p>
            {users.filter(user => user._id !== userId._id).map(user =>
                <CSSTransition timeout={10000} className="fad" key={user.email}>
                    <ListGroupItem style={{ display: 'flex', justifyContent: 'space-between' }} >
                        <div className="user-info">
                            <img className="avatar" src={`http://localhost:5000/avatars/${user._id}.jpg`} />
                            <p>{user.name}</p>
                        </div>
                        <img className="avatar letter pt-1" onClick={() => handleMail(user)} src="https://maxcdn.icons8.com/Share/icon/p1em/Messaging/message1600.png" />
                    </ListGroupItem>
                </CSSTransition>
            )}
        </ul>
    )
}
