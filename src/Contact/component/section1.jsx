import React from 'react'
import '../contact.css'
import '../../App.css'
import Button from '../../componentGeneral/button'
function Section1() {
  return (
    <div className="w-[100%] flex justify-center">
      <div className="2xl:container w-[100%] grid">
        <section className="w-[100%]  gridArea flex">
          <article className="w-[50%] bg-[#F7F7F7]"></article>
          <article className="w-[50%]  hidden md:block section1-contact-img1"></article>
        </section>
        <section className="w-[100%]  gridArea flex justify-center items-center py-20">
          <article className="w-[90%] md:w-[50%] bg-white p-5 lg:p-16 flex flex-wrap gap-5 transition-all duration-300 rounded-lg shadow-lg shadow-zinc-500 content-around">
            <h4 className="w-[100%] text-[1.5rem] color-1 flex justify-center">
              Message Us
            </h4>
            <h3 className="w-[100%] text-[2.5rem] flex justify-center">
              Get in Touch
            </h3>
            <label htmlFor="inp11" className="w-[100%] flex flex-wrap justify-between">
              <p className="w-[100%] text-[1.2rem]">Name</p>
              <input
                type="text"
                id="inp11"
                className="w-[100%] lg:w-[48%] h-[3.5rem] border-zinc-300 border text-[2rem]"
              />
              <div className="w-[100%] lg:w-[48%] text-[1rem] block lg:hidden">First</div>
              <input
                type="text"
                id="inp12"
                className="w-[100%] lg:w-[48%] h-[3.5rem] border-zinc-300 border text-[2rem]"
              />
              <div className="w-[100%] lg:w-[48%] text-[1rem] hidden lg:block">First</div>
              <div className="w-[100%] lg:w-[48%] text-[1rem]">Last</div>
            </label>
            <label htmlFor="inp13" className="w-[100%] flex flex-wrap justify-between">
              <p className="w-[100%] text-[1.2rem]">Email</p>
              <input
                type="email"    
                id="inp13"
                className="w-[100%] h-[3.5rem] border-zinc-300 border text-[2rem]"
              />
            </label>
            <label htmlFor="inp14" className="w-[100%] flex flex-wrap justify-between">
              <p className="w-[100%] text-[1.2rem]">Message</p>
              <textarea
                id="inp14"
                cols="30"
                rows="10"
                className="w-[100%] h-[8rem] border-zinc-300 border text-[1.3rem]"
              ></textarea>
            </label>
            <Button href={'/'} value={'send'} styleButton={'w-[100px] h-[3rem] bg-1 flex justify-center items-center rounded-lg text-white uppercase hover:bg-black transition-all duration-300'} />
          </article>
        </section>
      </div>
    </div>
  )
}

export default Section1