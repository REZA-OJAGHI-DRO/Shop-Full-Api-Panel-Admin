import React from 'react'
import '../contact.css'
import '../../App.css'
function Section2() {
  return (
    <div className="w-[100%] section2-contact-img2 flex justify-center">
      <div className="2xl:container w-[100%] grid">
        <section className="w-[100] gridArea bg-white opacity-80"></section>
        <section className="w-[100] gridArea flex justify-center items-center z-10 py-20">
          <div className="w-[90%] md:w-[74%] border-4 flex flex-wrap">
            <article className="w-[100%] lg:w-[60%] flex flex-wrap gap-10 py-20 justify-center content-center bg-[rgb(235,233,233)]">
              <h3 className="w-[80%] text-[3rem]">
                Contact Us
              </h3>
              <p className="w-[80%] text-[1.2rem] text-zinc-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h4 className="w-[80%] text-[2rem] mt-16">
                Follow Us
              </h4>
              <article className="w-[80%] flex justify-start items-center gap-5 text-[1.5rem] ">
                <a href="" className="color-1 hover:text-black transition-all duration-300">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="" className="color-1 hover:text-black transition-all duration-300">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="" className="color-1 hover:text-black transition-all duration-300">
                  <i className="bi bi-github"></i>
                </a>
              </article>
            </article>
            <article className="w-[100%] lg:w-[40%] flex justify-center items-start">
              <ul className="w-[80%] mt-20">
                <li className="w-[100%] flex mb-2">
                  <i className="bi bi-geo-alt-fill color-1 text-[1.2rem] me-2"></i>
                  <p className="text-[1.2rem]">
                    123 Fifth Avenue, New York, NY 10160
                  </p>
                </li>
                <li className="w-[100%] flex mb-2">
                  <i className="bi bi-telephone-fill color-1 text-[1.2rem] me-2"></i>
                  <p className="text-[1.2rem]">
                    + 1 234 567 890
                  </p>
                </li>
                <li className="w-[100%] flex mb-2">
                  <i className="bi bi-clock-fill color-1 text-[1.2rem] me-2"></i>
                  <p className="text-[1.2rem]">
                    Timing: 9am -8pm
                  </p>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </div>
    </div>
  )
  
}

export default Section2