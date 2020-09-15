import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DragNDrop from './DragNDrop';

export default function Account() {
  const userId = useSelector((state) => state.auth.user);
  const userImg = useSelector((state) => {
    return state.auth.userImg;
  });

  const [name, setName] = useState(userId);
  const [file, setFile] = useState();

  const headers = {
    'Access-Control-Allow-Origin': 'http://localhost',
  };

  const upload = () => {
    const data = new FormData();
    data.append('name', name);
    data.append('file', file);
    axios
      .post(
        `http://localhost:5000/api/users/${userId}/upload`,
        data,
        { headers: headers }
      )
      .then((res) => {
        //here we get the new user info that include the path of the new image
        // we need to make an action that will update the userImg of our state
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="container flex-row">
      <div className="account-info">
        <img className="account-image" src={userImg} />
        <form action="#">
          <div className="flex">
            <label htmlFor="file">File</label>
            <input
              type="file"
              id="file"
              accept=".jpg"
              onChange={(e) => {
                const file = e.target.files[0];
                setFile(file);
              }}
            />
          </div>
        </form>
        <button onClick={upload} className="warning">
          Upload
        </button>
      </div>

      <DragNDrop parent="account" />
    </div>
  );
}
