import React, { useEffect } from 'react';
import { logout } from '../../redux/actions/authActions';
import { NavLink } from 'reactstrap';
import { useDispatch } from 'react-redux';

export default function Logout(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(logout());
        props.history.push('/');
    }, []);

    return (
        <NavLink href="#">Logout</NavLink>
    )
}
