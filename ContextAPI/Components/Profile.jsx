import React from 'react';
import userContext from '../Context/UserContext';
import { useContext } from 'react';

function Profile() {
    const {user} = useContext(userContext)//FETCH DATA
    console.log(user)
    if(!(Object.keys(user).length === 2 && user.username && user.password))
    {
        return <div>PLEASE LOGIN</div>
    }


  return (
    <>
        <div>Welcome {user.username} u LogedIn......</div>
    </>
  );
}

export default Profile;