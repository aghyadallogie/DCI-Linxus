import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DragNDrop from './DragNDrop';
import { set } from 'mongoose';

export default function Account() {

    const userId = useSelector(state => state.auth.user._id);
    const [name, setName] = useState(userId);
    const [file, setFile] = useState();
    const [accImg, setAccImg] = useState(`http://localhost:5000/avatars/${userId}.jpg`);

    const headers = {
        'Access-Control-Allow-Origin': 'http://localhost'
    }

    const upload = () => {
        const data = new FormData();
        data.append("name", name);
        data.append("file", file);
        const imgurl = `http://localhost:5000/avatars/${userId}.jpg`;
        axios
            .post("http://localhost:5000/api/users/upload", data, { 'headers': headers })
            .then(res => setAccImg(accImg   + '?')
            ).catch(err => console.log(err))
    }

    return (
        <div className="container flex-row">
            <div className="account-info">
                <form action="#" className="img-form">
                    <div className="flex">
                        <h2 style={{paddingBottom: '30px'}}>Click on image to change</h2>
                        <label htmlFor="file">
                            <img className="account-image" src={accImg} />
                        </label>
                        <input style={{ visibility: 'hidden' }} type="file" id="file" accept=".jpg" onChange={e => {
                            const file = e.target.files[0];
                            setFile(file)
                        }} />
                    </div>
                </form>
                <button onClick={upload} className="warning">Upload</button>
            </div>

            <DragNDrop parent='account' />
        </div>
    )
}
