import React from 'react'
import { createRoot } from 'react-dom/client'
import Chai from './chai.jsx'

import App from './App.jsx'

const myElement = (
  <h1>
    <a href="https://google.com" target="_blank">VISIT GOOGLE</a>
  </h1>
)

const user = "ADMIN"

// .render method has its predefind format in which its accpest the paranetr 
const myElem = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me'
}

// correct way that .render wants
const reactElem = React.createElement(
  'a',
  {href : 'https://google.com',target: '_blank'},
  'Click Me to See Google',
  user
)



function MyFun(){
    return(
      <div>
        <h1>THIS IS MY FUNCTION</h1>
      </div>
    )
}

createRoot(document.getElementById('root')).render(
  
    // myElement        
    // <App/> 
    // reactElem
    <Chai/>
 
)
