import React from "react";
import "../Home.css";
import TitleSection from "../../componentGeneral/titleSection";
import Button from "../../componentGeneral/button";
function Section2() {
  return (
    <>
      <section className="w-full h-[100vh] flex justify-center">
        <div className="w-full h-full flex flex-wrap justify-center items-center">
          <div className="w-[100%] lg:w-[75%] h-[65%] grid">
            <div className="section2-home w-full h-full gridArea">
                <div className="w-full h-full bg-[rgba(255,255,255,.7)] lg:bg-transparent"></div>
            </div>
            <div className="gridArea w-full h-full flex justify-center">
              <div className="2xl:container w-full flex justify-end">
                <div className="w-[100%] lg:w-[50%] px-1 lg:px-24 h-full flex flex-wrap justify-center content-center">
                  <TitleSection
                    head1={"Be Bold, Be Daring"}
                    head2={"A Whole New Look"}
                    text={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                    }
                  />
                  <Button
                    value={"VIEW MORE"}
                    href={"#"}
                    styleButton={
                      "text-white bg-[rgb(38,159,183)] py-2 px-9 rounded-md flex justify-center items-center border-white  transition-all duration-300 hover:bg-black "
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
