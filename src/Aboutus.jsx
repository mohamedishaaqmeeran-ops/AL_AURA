import React from 'react'
import Nav from './Common_Components/Nav'
import Aboutus_Content from './Aboutus_Components/Aboutus_Content'

import VM from './Aboutus_Components/VM'
import Principles from './Aboutus_Components/Principles'

import Footer from './Footer'
function Aboutus() {
  return (
      <>
      <Nav />
      <Aboutus_Content/>
      <VM/>
     <Principles/>
     <Footer/>
    </>
  )
}

export default Aboutus