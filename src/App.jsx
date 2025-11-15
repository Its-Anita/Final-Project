import { useState } from 'react'
import './App.css'
import Hero1 from './components/Layout/Hero1'
import About from './components/Layout/About'
import AllProducts from './components/Layout/AllProducts'
import Testimonials from './components/Layout/Testimonials'
import CTA from './components/Layout/CTA'
import Footer from './components/Layout/Footer'
import Features  from './components/Layout/Features'
import Gallery1 from './components/Layout/Gallery1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Hero1 />
         <About />
         <Features />
         <Gallery1 />
         <AllProducts />
         <Testimonials />
         <CTA />
         <Footer />
    </>
  )
}

export default App;
