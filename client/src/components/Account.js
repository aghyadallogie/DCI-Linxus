import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DragNDrop from './DragNDrop';

export default function Account() {

    const userId = useSelector(state => state.auth.user._id);

    let userImg;
    if (userId) {
        userImg = `http://localhost:5000/avatars/${userId}.jpg`;
    } else {
        userImg = `https://kooledge.com/assets/default_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png`
    }

    const [name, setName] = useState(userId);
    const [file, setFile] = useState();

    const headers = {
        'Access-Control-Allow-Origin': 'http://localhost'
    }

    const upload = () => {
        const data = new FormData();
        data.append("name", name);
        data.append("file", file);
        axios.post("http://localhost:5000/api/users/upload", data, { 'headers': headers }).then(res => console.log(res)).catch(err => console.log(err));  // can i use dispatch here also sense?
    }

    return (
        <div className="container flex-row">
            <div className="account-info">
                <form action="#">
                    <div className="flex">
                        <label htmlFor="file">
                            <img className="account-image" src={userImg} />
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
