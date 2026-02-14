import React , {useState , useContext} from 'react';
import UserContext from '../Context/UserContext';

//WRITER
function Login() {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')


    const {setUser} = useContext(UserContext) //geting the access of setUser function

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username , password})//setting the values
    }

  return (
    <>
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" placeholder='password' value={password}  onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>SUBMIT</button>

        </div>
    </>
  );
}

export default Login;