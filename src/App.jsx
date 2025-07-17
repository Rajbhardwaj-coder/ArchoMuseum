import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Explore from './Components/Explore'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Footer from './Components/Footer'



const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
       <Navbar/>
      <Hero/>
      <About/>
      <Explore/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </main>
  )
}


export default App
