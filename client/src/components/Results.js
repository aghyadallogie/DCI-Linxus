import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function Results() {

    const [matchingUsers, setMatchingUsers] = useState([{ refs: [], _id: 0, name: "", email: "" }]);

    const myUsers = useSelector(state => state.user.matchingUsers);

    useEffect(() => {
        setMatchingUsers(myUsers)
    }, [myUsers])

    const results = matchingUsers;

    return (
        <div className="main">
            <ListGroup flush style={{ margin: '2rem', width: '40vw', "max-height": '50vh'}} >
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
    );
}