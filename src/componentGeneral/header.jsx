import React from 'react'
import '../App.css'
import { useSelector } from 'react-redux';
function Header({bg , head}) {
 

  return (
    <header className='w-full  grid'>
        <section className='w-full  gridArea '>
            <img src={bg} className='w-full h-[40vh] md:h-[60vh] object-cover' alt="" />
        </section>
        <section className='w-full gridArea grid'>
            <article className='w-full gridArea bg-2'>
            </article>
            <article className='w-full gridArea flex justify-center items-end py-10'>
                <h1 className='text-[5rem] text-white'>{head}</h1>
            </article>
        </section>
    </header>
  )
}

export default Header