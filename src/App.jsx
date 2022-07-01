import React from 'react'
import Header from './components/Header/header.jsx'
import Nav from './components/Nav/nav.jsx'
import About from './components/About/about.jsx'
import Experience from './components/Experience/experience.jsx'
import Services from './components/Services/services.jsx'
import Portfolio from './components/Portfolio/portfolio.jsx'
import Testimonials from './components/Testimonials/testimonials.jsx'
import Contact from './components/Contact/contact.jsx'
import Footer from './components/Footer/footer.jsx'

const App = () => {
  return (
    <>
      <Header/>
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App