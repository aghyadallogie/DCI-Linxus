import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DragNDrop from './DragNDrop';
import SignUpForm from './SignUpForm';


function Register(props) {

    const [refs, setRefs] = useState(['asdf', 'fdsa', 'qwer']);
    const [items, setItems] = useState([
        { title: 'pool', items: [] },
        { title: 'filter', items: [] }
    ]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/references')
            .then(res => {
                let refs = res.data.map(ref => ref.name)
                let targetArray = [
                    { title: 'pool', items: [...refs] },
                    { title: 'filter', items: [] }
                ]
                setItems(items => targetArray)
            }).catch(err => console.log('error: ', err));
    }, [])

    return (
        <div className="main">
            <SignUpForm
                refs={refs}
                props={props}
            />

            <DragNDrop data={items}
                setRefs={setRefs}
            />
        </div>
    );
}

export default Register;