import React from "react";
import Button from "../../componentGeneral/button";
function Section7() {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-full 2xl:container flex justify-center py-10">
        <div className="w-[90%] lg:w-[70%] flex flex-wrap gap-4 lg:gap-0">
          <article className="w-[100%] lg:w-[50%] flex justify-center items-center">
            <h4 className="text-[1.5rem] lg:text-[2.5rem] font-semibold">
              Sign-up the Makeup Fan Club
            </h4>
          </article>
          <article className="w-[100%] lg:w-[50%] flex justify-center items-center">
            <form action="" className="w-[100%] lg:px-5 flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-[100%] h-[50px] px-3 text-[1.5rem] border-2"
              />
              <Button
                value={"SUBSCRIBE"}
                href={"#"}
                styleButton={
                  "w-[40%] text-white bg-[rgb(38,159,183)] py-2 px-9 rounded-md flex justify-center items-center border-white  transition-all duration-300 hover:bg-black "
                }
              />
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Section7;
