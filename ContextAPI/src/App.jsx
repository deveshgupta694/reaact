import { useState } from 'react'
import './App.css'
import UserContextProvider from '../Context/UserContextprovider'
import Login from '../Components/Login'
import Profile from '../Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>

      <h1>React with Context</h1>
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
