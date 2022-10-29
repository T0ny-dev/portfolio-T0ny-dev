import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Brand from '../components/Brands/Brand'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Brand/>
    <Skills/>
    <Projects/>
    <Footer/>
  </div>
  )
}

export default Home;