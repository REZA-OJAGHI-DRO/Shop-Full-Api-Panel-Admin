import React from 'react'
import Header from '../componentGeneral/header'
import img1 from '../assets/img/7.jpg'
import Section1Testimonials from './component/section1'
import Section2Testimonials from '../Home/component/section7'
import Footer from '../componentGeneral/footer'
function Testimonials() {
  return (
    <main className='w-full bg-[#fff]'>
    <Header bg={img1} head={'Testimonials'}/>
    <Section1Testimonials/>
    <Section2Testimonials/>
    <Footer/>
    </main>
  )
}

export default Testimonials