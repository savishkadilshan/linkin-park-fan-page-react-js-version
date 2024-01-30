import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './@media.css'
import HeroSection from './Components/HeroSection/HeroSection'
import QuoteSection from './Components/QuoteSection/QuoteSection'
import FooterSection from './Components/FooterSection/FooterSection'

function App() {
  
  return (
    <>
      <HeroSection />
      <QuoteSection />
      <FooterSection />
    </>
  )
}

export default App
