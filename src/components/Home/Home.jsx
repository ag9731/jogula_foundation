import React from 'react'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import WhatsAppButton from '../WhatsupButton/WhatsupButton'

const Home = () => {
  return (
    <div className='flex flex-col gap-11'>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  )
}

export default Home
