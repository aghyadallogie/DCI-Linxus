import React from 'react';
import DragNDrop from './DragNDrop';
import SignUpForm from './SignUpForm';
import backgroundImage from '../assets/backgroundImage.png'

export default function Register(props) {
    return (
        <>
            <h3 style={{ textAlign: 'center' }}>Please enter your info then drag and drop your interests with which other users can find you !</h3>
            <div className="main" style={{
                backgroundImage: `url(${backgroundImage})`
            }}>
                <SignUpForm props={props} />
                <DragNDrop />
            </div >
        </>
    )
}
