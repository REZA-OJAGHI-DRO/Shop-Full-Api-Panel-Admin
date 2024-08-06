import React from "react";
import "../App.css";
function Footer() {
  return (
    <footer>
      <div className="w-[100%] font-font1 flex justify-center bg-black text-white">
        <div className="2xl:container w-[100%] pt-10">
          <section className="w-[100%] py-10 flex justify-around flex-wrap">
            <article className="w-[100%] lg:w-[30%]  flex justify-center">
              <ul className="w-[70%] h-[100%] flex flex-wrap content-center">
                <li className="w-[100%] flex justify-start items-center mb-10 text-[2rem]">
                  Contact Details
                </li>
                <li className="w-[100%] flex justify-start items-center text-[1rem] md:text-[1.1rem] ">
                  <a
                    href=""
                    className="hover:text-[rgb(38,159,183)] transition-all duration-300"
                  >
                    09121594246
                  </a>
                </li>
                <li className="w-[100%] flex justify-start items-center text-[1rem] md:text-[1.1rem] my-1 ">
                  <a
                    href=""
                    className="hover:text-[rgb(38,159,183)] transition-all duration-300"
                  >
                    rezadro021[]gmail.com
                  </a>
                </li>
                <li className="w-[100%] flex justify-start items-center text-[1rem] md:text-[1.1rem] ">
                  <a
                    href=""
                    className="hover:text-[rgb(38,159,183)] transition-all duration-300"
                  >
                    123 Fifth Avenue, New York, NY 10160
                  </a>
                </li>
              </ul>
            </article>
            <article className="w-[100%] py-10 lg:w-[30%]  flex justify-center items-center">
              <div className="w-[200px] lg:w-[40%] h-[50px] lg:h-[60px] footer-img"></div>
            </article>
            <article className="w-[100%] lg:w-[30%]  flex justify-center">
              <ul className="w-[70%] h-[100%] flex flex-wrap content-center">
                <li className="w-[100%] flex justify-start items-center mb-10 text-[2rem]">
                  Quick Links
                </li>
                <li className="w-[100%] flex justify-start items-center text-[1rem] md:text-[1.1rem] ">
                  <a
                    href=""
                    className="hover:text-[rgb(38,159,183)] transition-all duration-300"
                  >
                    Shipping & Returns
                  </a>
                </li>
                <li className="w-[100%] flex justify-start items-center text-[1rem] md:text-[1.1rem] my-1 ">
                  <a
                    href=""
                    className="hover:text-[rgb(38,159,183)] transition-all duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li className="w-[100%] flex justify-start items-center text-[1rem] md:text-[1.1rem] ">
                  <a
                    href=""
                    className="hover:text-[rgb(38,159,183)] transition-all duration-300"
                  >
                    Customer Service
                  </a>
                </li>
              </ul>
            </article>
          </section>
          <section className="w-[100%] pt-10 flex flex-wrap lg:flex-nowrap ">
            <article className="w-[100%] lg:w-[50%] py-5 flex justify-center items-center gap-10 text-[1.8rem] lg:text-[2rem]">
              <a
                href=""
                className="hover:text-[rgb(38,159,183)] transition-all duration-300"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href=""
                className="hover:text-[rgb(38,159,183)] transition-all duration-300"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href=""
                className="hover:text-[rgb(38,159,183)] transition-all duration-300"
              >
                <i className="bi bi-github"></i>
              </a>
            </article>
            <article className="w-[100%] lg:w-[50%] py-5 flex justify-center items-center">
              <p className="text-[.8rem] md:text-[1.1rem]">
                Copyright © 2024 Cosmetics Store | Powered by Cosmetics Store
              </p>
            </article>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
