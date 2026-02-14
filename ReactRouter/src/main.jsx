import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, parsePath, RouterProvider } from 'react-router-dom'
import Layout from '../Components/Layout'
import Home from '../Components/Home'
import About from '../Components/About'
import Contact from '../Components/Contact'
import { Route } from 'react-router-dom'
import User from '../Components/User'
import Github from '../Components/Github'

//method 1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path:'',
//         element:<Home/>
//       } ,
//       {
//         path: 'about',
//         element:<About/>
//       } ,
//       {
//         path: 'contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}> 
        <Route path='' element={<Home/>}/>  
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userid' element={<User/>}/>
        <Route path='github' element={<Github/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
