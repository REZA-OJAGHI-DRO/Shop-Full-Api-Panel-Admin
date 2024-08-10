import React from 'react'
import Header from '../componentGeneral/header'
import img1 from '../assets/img/15.jpg'
import Section1About from './component/section1'
import Footer from '../componentGeneral/footer'
import Section3 from '../Home/component/section3'
import Section4 from '../Home/component/section4'
import Section2About from './component/section2'
function About() {
  return (
    <main className='w-full bg-[#fff]'>
        <Header bg={img1} head={'About'}/>
        <Section1About/>
        <Section2About/>
        <Section3/>
        <Section4/>
        <Footer/>
    </main>
  )
}

export default About