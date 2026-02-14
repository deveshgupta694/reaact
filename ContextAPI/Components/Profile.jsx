import React from 'react';
import userContext from '../Context/UserContext';
import { useContext } from 'react';

//Reader page 
function Profile() {

    const {user} = useContext(userContext)//getting user variable from warehouse

  
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