import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Foote from './components/Foote'
import Deal from './components/Deal'
import PageNotFound from './components/PageNotFound'
import First from './components/Ecommerce/First';
import Navigation from './components/Ecommerce/customer/comp/Navigation/Navigation';
import MainCarousel from './components/Ecommerce/customer/comp/HomeCarousel/Maincarousel';
// routes root
const router =createBrowserRouter([
  {
    path: '/',
    component: <Hero/>
  },
  {
    path: '/foote',
    component:<Foote/>  
  },
  {
    path: '/eyes',
    element: <Eyes/> 
  },
  {
    path: '/deal',
    component:<Deal/>
  },
  {
    path: '/about',
    element:<About/>
  },
  {
    path:'*',
    element:<PageNotFound/>
  },
  {
    path:'/first',
    element:<First/>  
  },
  {
    path:'/Navigation',
    element:<Navigation/>
  },
  {
    path:'/MainCarousel',
    element:<MainCarousel/>
  }
])

function App() {
  return (
    
    <main className='w-full min-h-screen text-white bg-zinc-900'>
      <RouterProvider router={router}></RouterProvider>
      {/* <First/> */}
{/*       
      <MainCarousel/> */}
      <Nav/>
      <Hero/>
      <Marque/>
      <About/>
      <Eyes/>
      <Deal name="Riya"/>
      <Foote/>
    </main>
  )
}

export default App