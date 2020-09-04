import React  from 'react';
import { Link } from 'react-router-dom';
import chandler from '../chandler.jpeg';

// class User extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//         <div>
//       <div className="user-details">
//           <div className='image-text'>
//           <div className='circular-avatar'>
//               <img src={chandler}></img>
//           </div>
//           <div className='user-info'>
//         <p>USERNAME:</p>
//         <p>EMAIL:</p>
//         <p>PASSWORD:</p>
//         </div>
//         </div>

//         <div className='filter-container'>

//         </div>
//       </div>
//       <Link className='logout' to="/login">Logout</Link>
//       </div>
//     );
//   }
// }

// export default User;

const User = (props) => {
  let { user } = props;

  return (
    <div>
      <div className="user-details">
        <div className="image-text">
          <div className='circle-image'>
          <div className="circular-avatar">
            <img src={chandler}></img>
          </div>
          </div>
          <div className="user-info">
            <p>USERNAME:</p>
            <p>EMAIL:</p>
            <p>PASSWORD:</p>
          </div>
        </div>

        <div className="filter-container">
          <input className='filter-user' placeholder='filter references here'></input>
        </div>
      </div>
      <Link className="logout" to="/login">
        Logout
      </Link>
    </div>
  );
};

export default User;
