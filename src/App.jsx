import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
import Service from './Service'
import Aboutus from './Aboutus'
import Portfolio from './Portfolio'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneButton from './PhoneButon'
import Whatsapp from './Whatsapp'
import Contact from './Contact'
import Privacy from './T&C_Components/Privacy'
import Disclaimer from './T&C_Components/Disclaimer'
import ScrollToTop from "./ScrollToTop";
function App() {
  

  return (
    <>
       
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>} />

           <Route path="/Services" element={<Service/>} />
            <Route path="/Aboutus" element={<Aboutus/>} />
            <Route path="/Portfolio" element={<Portfolio/>} />
            <Route path="/Contactus" element={<Contact/>} />
             <Route path="/PrivacyPolicy" element={<Privacy/>} />
            <Route path="/DisclaimerPolicy" element={<Disclaimer/>} />
        </Routes>
      </Router>
      <PhoneButton/>
      <Whatsapp/>
    </>
  )
}

export default App
