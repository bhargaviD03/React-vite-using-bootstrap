import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact'
import Hero from './Pages/Hero'
import CardSection from './Pages/CardSection'
import CtaSection from './Pages/CtaSection'
import AboutUs from './Pages/AboutUs'
import Testimonials from './Pages/Testimonials'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <CardSection />
      <CtaSection />
      <AboutUs />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App