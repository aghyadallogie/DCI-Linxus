import React, { Fragment } from 'react';
import { logout } from '../../redux/actions/authActions';
import { NavLink } from 'reactstrap';
import { useDispatch } from 'react-redux';

export default function Logout(props) {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout());
        props.history.push('/');
    }

    return (
        <Fragment>
            <NavLink onClick={handleLogout} href="#">Logout</NavLink>
        </Fragment>
    )
}
