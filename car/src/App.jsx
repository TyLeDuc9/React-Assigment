import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Services } from './components/Services/Services'
import { CarList } from './components/CarList/CarList'
import { Testimonial } from './components/Testimonial/Testimonial'
import { AppStore } from './components/AppStore/AppStore'

export const App = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <CarList/>
      <Testimonial/>
      <AppStore/>
    </div>
  )
}
