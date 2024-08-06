import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import img1 from "./assets/img/2.png";
import "./App.css";

function App() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [styleSet, setStyleSet] = useState(false);

  return (
    <Router>
      <div className="w-full bg-[#F7F7F7]">
        <nav
          className={`w-full h-[130px] ${
            scrollY > 200 ? "hidden" : "hidden lg:flex"
          }  flex-wrap justify-center  items-center fixed`}
        >
          <div className="w-full flex justify-center items-center">
            <img src={img1} alt="" className="w-[170px] h-[35px]" />
          </div>
          <ul className="w-[50%] flex *:text-white *:text-[1rem] justify-around *:uppercase  items-center">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/shop">shop</Link>
            </li>
            <li>
              <Link to="/testimonials">testimonials</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to="/addCart">
                <i className="bi bi-basket3-fill text-[1.5rem]"></i>
              </Link>
            </li>
          </ul>
        </nav>
        <nav
          className={`w-full h-[130px] ${
            scrollY > 200 ? "hidden" : "lg:hidden flex"
          }  justify-center items-center fixed`}
        >
          <ul className="flex w-full justify-between px-10">
            <li>
              <i
                onClick={() =>
                  styleSet ? setStyleSet(false) : setStyleSet(true)
                }
                className="bi bi-list text-white text-[2rem] cursor-pointer"
              ></i>
            </li>
            <li>
              <Link to="/addCart">
                <i className="bi bi-basket3-fill text-[1.5rem] text-white"></i>
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className="w-[100%] fixed top-0 z-50 bg-black "
          style={{ display: styleSet ? "flex" : "none" }}
        >
          <ul className="w-[100%] px-10 flex *:w-full flex-wrap *:text-[2rem] *:text-white *:text-center justify-around *:uppercase  items-center">
            <li className="py-5 border-b border-zinc-500">
              <i
                onClick={() =>
                  styleSet ? setStyleSet(false) : setStyleSet(true)
                }
                className="bi bi-x-circle hover:text-[rgb(38,159,183)] transition-all duration-300 cursor-pointer"
              ></i>
            </li>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/shop">shop</Link>
            </li>
            <li>
              <Link to="/testimonials">testimonials</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
