import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'


// let counter = 5
function App() {
  let [counter , setCounter] = useState(5) // without this method react wont update any change value at UI
  //useState -> a kind of HOOK
  
const addValue = () => {
  if(counter < 20)
  setCounter(counter + 1)
  console.log("Value added" , new Date().toLocaleTimeString())
}

const subValue = () => {
  if(counter > 0)
  setCounter(counter - 1)
  console.log("Value subtracted" , new Date().toLocaleTimeString())
}

  
  
  return (
    <>
        <h1>this is a counter project</h1>
        <h2>Count Value : {counter}</h2>

        <button onClick={addValue}>Increment</button>
        <button onClick={subValue}>Decrement</button>
    </>
  )
}

export default App
