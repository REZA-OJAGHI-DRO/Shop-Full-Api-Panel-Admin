import React from "react";
import "../../App.css";
import "../Home.css";
import Button from "../../componentGeneral/button";
function header() {
  return (
    <>
      <header className="w-full h-[60vh] md:h-[92vh] lg:h-[100vh] grid header-home overflow-hidden">
        <div className="gridArea w-full h-[100%] bg-[rgba(0,0,0,.3)]"></div>
        <div className="gridArea w-full h-[100%] flex justify-center items-end">
          <div className="w-full 2xl:container">
            <article className="w-full flex justify-center h-calc">
              <div className="w-[70%] h-[100%]">
                <div className="w-[100%] lg:w-[50%] h-[100%] flex flex-wrap content-center gap-1  lg:gap-3 pb-2 justify-start *:text-white">
                  <p className="text-[.9rem] md:text-[1rem] lg:text-[1.2rem] w-full">
                    A Whole New Look
                  </p>
                  <h1 className="text-[2rem] md:text-[3rem] lg:text-[6rem] w-full font-semibold">
                    Beauty
                  </h1>
                  <div className=" w-full line justify-between items-center text-white text-[2rem] md:text-[3rem] lg:text-[6rem] font-semibold grid">
                    <h4 className="gridArea h4-header1">Pronounced</h4>
                    <h4 className="gridArea h4-header2">Seen</h4>
                    <h4 className="gridArea h4-header3">It Feels</h4>
                  </div>
                  <p className="text-[.8rem] lg:text-[1rem] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                    mattis.
                  </p>
                  <Button
                    value={"VIVE MORE"}
                    href={"#top"}
                    styleButton={
                      "text-white text-[1rem] lg:text-[1.5rem] px-4 rounded-xl py-1 border-2 border-white  transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                    }
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </header>
    </>
  );
}

export default header;
