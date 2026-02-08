import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
    username: "devesh",
    age: 21
  }

  let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Hello React</h1>
      {/* <Card myName="DEVESH" myObj = {obj} Array = {myArr}/> */}
      <Card username="Devesh" btntext="Ladka"/>
      <Card username="Sweety"/>
    </>
  )
}

export default App
