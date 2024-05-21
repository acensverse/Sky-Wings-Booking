import React, { useEffect, useState } from 'react';
import './App.css'
import Signup from './components/Login/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';


function App() { 

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/Signup',
      element: <Signup/>
    },
    {
      path: '/test',
      element: <h1> Test </h1>
    }

  ])



  const [bgImage, setBgImage] = useState('')
  
  useEffect(() => {
    const imageURLs = [
      'images/river.jpg',
      'images/boat.jpg',
      'images/1.jpg',
      'images/2.jpg',
      'images/3.jpg',
      'images/4.jpg'
    ]
    
    const randomBg = Math.floor(Math.random() * imageURLs.length)
    const randomImage = imageURLs[randomBg];

    setBgImage(randomImage)

  },[])

  return (
    <div className='app' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bgImage})` }}>
      
      <RouterProvider router={router} />
      

      {/* Mobile view Port Trip Section */}



      {/* --------------------------------------------------------------------------------- */}

    </div>
  )
}

export default App
