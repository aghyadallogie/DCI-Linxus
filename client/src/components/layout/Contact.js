import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


function Contact() {

  const [matchingUsers, setMatchingUsers] = useState([{ refs: [], _id: 0, name: "", email: "" }]);

  const myUsers = useSelector(state => {
    console.log('state ', state);
    return state.user.matchingUsers
  });

  useEffect(() => {
    console.log('payload ', myUsers);
    setMatchingUsers(myUsers)
    console.log('users here', matchingUsers);
  }, [myUsers])

  console.log(myUsers);

  return (
    <div>
      <h3>Contact us</h3>
      {matchingUsers.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}

export default Contact;