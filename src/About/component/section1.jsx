import React from 'react'
import '../About.css'
import img1 from '../../assets/img/18.jpg'
function Section1() {
  return (
    <section className='w-full grid'>
        <article className='w-full h-full gridArea section1-about-bg opacity-10'></article>
        <article className='w-full h-full gridArea z-40'>
            <section className="w-[100%]  flex justify-center items-center py-20">
                <div className="w-[90%] md:w-[74%] flex flex-wrap">
                    <article className="w-[100%] md:w-[60%]  flex flex-wrap content-between px-16 pb-24">
                        <h4 className="w-[100%] text-[1.3rem] color-1">
                            Helping You Look Good
                        </h4>
                        <h2 className="w-[100%] text-[2rem] font-bold">
                            Let&apos;s Talk about Beauty
                        </h2>
                        <p className="w-[100%] text-[1rem] text-zinc-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                        </p>
                        <p className="w-[100%] text-[1rem] text-zinc-500">
                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec
                            sagittis sem nibh id elit vulputate cursus a sit amet mauris.
                        </p>
                        <h4 className="w-[100%] text-[1.3rem] color-1">
                            Features of Our Products
                        </h4>
                        <ul className="w-[100%] flex flex-wrap">
                            <li className="w-[50%] text-[1.3rem] text-zinc-500">
                                <i className="bi bi-caret-right-fill color-1"></i>
                                Duis aute irure dolor
                            </li>
                            <li className="w-[50%] text-[1.3rem] text-zinc-500">
                                <i className="bi bi-caret-right-fill color-1"></i>
                                Duis aute irure dolor
                            </li>
                            <li className="w-[50%] text-[1.3rem] text-zinc-500">
                                <i className="bi bi-caret-right-fill color-1"></i>
                                Sed do eius mod
                            </li>
                            <li className="w-[50%] text-[1.3rem] text-zinc-500">
                                <i className="bi bi-caret-right-fill color-1"></i>
                                Sed do eius mod
                            </li>
                            <li className="w-[50%] text-[1.3rem] text-zinc-500">
                                <i className="bi bi-caret-right-fill color-1"></i>
                                Laboris nisi ut aliquip
                            </li>
                            <li className="w-[50%] text-[1.3rem] text-zinc-500">
                                <i className="bi bi-caret-right-fill color-1"></i>
                                Laboris nisi ut aliquip
                            </li>
                        </ul>
                    </article>
                    <article className="w-[100%] md:w-[40%] h-[40%] md:h-[100%]">
                        <img src={img1} alt="" className="w-full h-full" />
                    </article>
                </div>
            </section>
        </article>
    </section>
  )
}

export default Section1