import React from "react";
import img1 from "../../assets/img/logo-1.svg";
import img2 from "../../assets/img/logo-2.svg";
import img3 from "../../assets/img/logo-3.svg";
import img4 from "../../assets/img/logo-4.svg";
import img5 from "../../assets/img/logo-5.svg";
import "../Home.css";
function Section4() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full h-[50vh] flex justify-center items-center">
        <div className="w-[90%] xl:w-[70%] h-[40%] grid overflow-hidden">
          <div className="w-full h-full flex gridArea section4-home-img1">
            <Image />
          </div>
          <div className="w-full h-full flex gridArea section4-home-img2">
            <Image />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;

function Image() {
  return (
    <>
      <figure className="w-[20%] h-[100%]">
        <img src={img1} alt="" className="w-full h-full" />
      </figure>
      <figure className="w-[20%] h-[100%]">
        <img src={img2} alt="" className="w-full h-full" />
      </figure>
      <figure className="w-[20%] h-[100%]">
        <img src={img3} alt="" className="w-full h-full" />
      </figure>
      <figure className="w-[20%] h-[100%]">
        <img src={img4} alt="" className="w-full h-full" />
      </figure>
      <figure className="w-[20%] h-[100%]">
        <img src={img5} alt="" className="w-full h-full" />
      </figure>
    </>
  );
}
