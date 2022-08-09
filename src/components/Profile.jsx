// IMPORTS
import { useState, useEffect } from 'react';
import { userProfile } from '../api';
// PROFILE COMPONENT
const Profile = ({ token, loggedIn, messages, setMessages, username }) => {

  // STATES
  const [userData, setUserData] = useState({});
  console.log(token)

  
  // useEFFECT
useEffect(() => {
  console.log(token);
userProfile(token, setUserData);
  console.log(setUserData)
},[]);


// console.log(profileData)
console.log('User-Data: ', userData)

  return <>
    {loggedIn && 
    <div className='profile-area'>
      <div className='prof-header'>  
        <h1>Welcome {userData.data?.username}!</h1>
        </div>
    </div>}
    </>;
  // return (
  //   <div className='profile-area'>
  //     <div className='prof-header'>
  //      <h1>Welcome {username}!</h1>

  //     </div>
  //   </div>
  
  // )
};

export default Profile;
