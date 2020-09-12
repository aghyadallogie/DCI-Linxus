import React from 'react';
import DragNDrop from './DragNDrop';
import SignUpForm from './SignUpForm';
import backgroundImage from '../assets/backgroundImage.png'

export default function Register(props) {
    return (
        <div className="main" style={{
            backgroundImage: `url(${backgroundImage})`
        }}>
            <SignUpForm props={props} />
            <DragNDrop />
        </div >
    )
}
