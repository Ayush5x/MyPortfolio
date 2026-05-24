import { useState } from 'react'
import reactLogo from './assets/react.svg'


import Portfolio from './Components/Navbar'
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Project from "../src/Components/Projects/ProjectShowcase"
import ServicesSection from './Components/Services';
import WorkRoad from './Components/WorkRoad';
import AboutSection from './Components/AboutMe';
import TechStack from './Components/TechStack';
import CTASection from './Components/CTASection';
import Footer from './Components/Footer';


function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Project/>
      <ServicesSection/>
      <WorkRoad/>
      <AboutSection/>
      <TechStack/>
      <CTASection/>
      <Footer/>
    </>

  )
}

export default App
