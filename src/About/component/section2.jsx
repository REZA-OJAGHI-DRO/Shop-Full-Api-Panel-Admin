import React from 'react'
import img1 from '../../assets/img/16.jpg'
import img2 from '../../assets/img/17.jpg'
import '../../Home/Home.css'
function Section2() {
  return (
    <section className="w-full flex justify-center py-10">
    <div className="w-full h-[40vh] md:h-[50vh] lg:h-[70vh] flex justify-center items-center">
      <div className="w-[90%] xl:w-[70%] h-[100%] grid overflow-hidden">
        <div className="w-full h-full flex gridArea section4-home-img1">
          <Image1 />
        </div>
        <div className="w-full h-full flex gridArea section4-home-img2">
          <Image2 />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section2


function Image1() {
    return (
      <>
        <figure className="w-[100%] h-[100%]">
          <img src={img1} alt="" className="w-full h-full" />
        </figure>
      </>
    );
  }
function Image2() {
    return (
      <>
        <figure className="w-[100%] h-[100%]">
          <img src={img2} alt="" className="w-full h-full" />
        </figure>
      </>
    );
  }