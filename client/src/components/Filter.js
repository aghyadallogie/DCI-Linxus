import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DragNDrop from './DragNDrop';


export default function Filter() {

    const [results, setResults] = useState([]);
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

    const config = {
        headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjMyZTMwYjc5NmFhYjBhZmM0ZjgwMDciLCJpYXQiOjE1OTcxNzA0ODV9.FlXz-nWVMzNt9gxRNXeQ7sxTYQrRLK2cnNYUon-yrm4"
        }
    };

    const onSubmit = () => {
        let targetObj = {
            refs: [...refs]
        }
        axios.post("http://localhost:5000/api/users/search", targetObj, config)
            .then(res => {
                console.log('refs', refs);
                console.log(res);
                setResults(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="main">
                <DragNDrop data={items}
                    setRefs={setRefs}
                />
            </div>
            <div className="results">
                <button onClick={onSubmit}>Find!</button>
                <p>{results.length} found matching the targeted references!</p>
                {/* {results.length > 0 ? <Link to="/results" className="button" >Results!</Link> : ''} */}
            </div>
            <div className="results-table">
                {results.map(result =>
                    <div className="result-row" key={result.email}>
                        <div className="no-overflow">
                            <img className="avatar" src="https://kooledge.com/assets/default_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png" />
                            <p>{result.name}</p>
                        </div>
                        <img className="avatar" src="https://maxcdn.icons8.com/Share/icon/p1em/Messaging/message1600.png" />
                    </div>)}
            </div>
        </>
    );
}