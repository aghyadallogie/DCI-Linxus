import React from 'react';
import DragNDrop from './DragNDrop';
import SignUpForm from './SignUpForm';

export default function Register(props) {
    return (
        <div className="main">
            <SignUpForm props={props} />
            <DragNDrop />
        </div>
    )
}
