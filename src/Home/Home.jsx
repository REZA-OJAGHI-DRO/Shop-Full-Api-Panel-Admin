import React from 'react'
import Header from './component/header'
import Section1Home from './component/section1'
import Section2Home from './component/section2'
import Section3Home from './component/section3'
import Section4Home from './component/section4'
import Section5Home from './component/section5'
import Section6Home from './component/section6'
import Section7Home from './component/section7'
import Footer from '../componentGeneral/footer'
function Home() {
  return (
    <>
    <main className='w-full'>
        <Header/>
        <Section1Home/>
        <Section2Home/>
        <Section3Home/>
        <Section4Home/>
        <Section5Home/>
        <Section6Home/>
        <Section7Home/>
        <Footer/>
    </main>
    </>
  )
}

export default Home