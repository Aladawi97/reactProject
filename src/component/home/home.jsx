import React from 'react'
import { Hero } from './hero'
import { About } from '../pages/About'
import { Services } from '../pages/Services'
import { Counter } from '../pages/Counter'
import { Portfolio } from '../pages/Protfolio'
import { Contact } from '../pages/Contact'


export const home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      {/* <Blog /> */}
      <Contact />
      
    </>
  )
}
