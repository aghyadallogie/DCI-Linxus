import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Entries = ({ users, loading }) => {

    const userId = useSelector(state => state.auth.user);

    if (loading) return <h3>Loading ..</h3>;

    return (
        <ul className="list-group mb-4">
            {users.filter(user => user._id !== userId).map(user =>
                <CSSTransition timeout={10000} className="fad" key={user.email}>
                    <ListGroupItem style={{ display: 'flex', justifyContent: 'space-between' }} >
                        <div className="user-info">
                            <img className="avatar" src="https://kooledge.com/assets/default_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png" />
                            <p>{user.name}</p>
                        </div>
                        <img className="avatar" src="https://maxcdn.icons8.com/Share/icon/p1em/Messaging/message1600.png" />
                    </ListGroupItem>
                </CSSTransition>
            )}
        </ul>
    )
}
