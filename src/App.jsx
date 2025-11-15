import { useState } from 'react'
import './App.css'
import Hero1 from './components/Hero1'
import About from './components/About'
import AllProducts from './components/AllProducts'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Features  from './components/Features'
import Gallery1 from './components/Gallery1'

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
