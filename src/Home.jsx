import React from 'react'
import Start from './Home_Components/Start'
import Skills from './Home_Components/Skills'
import Ideas from './Home_Components/Ideas'
import Choose from './Home_Components/Choose'

import Hero from './Hero'
import Footer from './Footer'
import FAQ from './Home_Components/FAQ'
import Guarantee from './Home_Components/Guarante'
import Newsletter from './Home_Components/Newsletter'
function Home() {
  return (
    <>
      <Hero/>
      <Start/>
      <Ideas/>
      <Skills/>
      <Choose/>
      <Guarantee/>
      <FAQ/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home
