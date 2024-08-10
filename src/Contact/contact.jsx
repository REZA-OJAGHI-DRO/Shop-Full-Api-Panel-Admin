import React from 'react'
import img1 from '../assets/img/17.jpg'
import Header from '../componentGeneral/header'
import Footer from '../componentGeneral/footer'
import Section1Contact from './component/section1'
import Section2Contact from './component/section2'
function Contact() {
  return (
   <main className='w-full bg-[#F7F7F7]'>
    <Header bg={img1} head={'Contact'}/>
    <Section1Contact/>
    <Section2Contact/>
    <Footer/>
   </main>
  )
}

export default Contact