import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/actions/authActions';
import { NavLink, Modal, ModalHeader, ModalBody, Alert, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { clearErrors } from '../../redux/actions/errorActions';

export default function LoginModal() {

    const [loginUser, setLoginUser] = useState({
        modal: false,
        email: '',
        password: '',
        msg: ''
    })

    const dispatch = useDispatch();

    const error = useSelector(state => state.error);

    useEffect(() => {
        setLoginUser({ ...loginUser, msg: error.msg.msg });

        // if authenticated close modal
        if (loginUser.modal) {
            if (loginUser.isAuthenticated) {
                toggle();
            }
        }
    }, [error])

    const toggle = () => {
        dispatch(clearErrors());
        setLoginUser({ ...loginUser, modal: !loginUser.modal });
    }

    const onChange = e => {
        setLoginUser({ ...loginUser, [e.target.name]: [e.target.value] })
    }

    const onSubmit = e => {
        e.preventDefault();
        const { email, password } = loginUser;
        const loginData = { email, password }
        dispatch(loginAction(loginData));
        toggle();
    }

    return (
        <div>
            <NavLink onClick={toggle} href="#">
                Login
            </NavLink>
            <Modal isOpen={loginUser.modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>User Login</ModalHeader>
                <ModalBody>
                    {loginUser.msg ? (<Alert color="danger">{loginUser.msg.msg}</Alert>) : null}
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Email"
                                className="mb-3" onChange={onChange} />

                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Password"
                                className="mb-3" onChange={onChange} />
                            <Button color="dark" style={{ marginTop: '2rem' }} block>
                                Login
                                </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}
