import React from 'react'
import { useSelector } from "react-redux";
import img1 from "../assets/img/2.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
    const data = useSelector((state) => state.product.ShopProduct);
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
    <>
       <div className="w-full bg-[#F7F7F7]">
     <nav
       className={`w-full h-[130px] ${
         scrollY > 100 ? "hidden" : "hidden lg:flex"
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
           <Link to="/login">sign up / login</Link>
         </li>
         <li>
           <Link to="/addCart" className="relative">
             <i className="bi bi-basket3-fill text-[1.5rem]"></i>
            {
             data.length > 0 && <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white flex justify-center items-center text-xs">{data.length}</span>
            }
           </Link>
         </li>
         <li>
           <Link to="/dashboard">dashboard</Link>
         </li>
       </ul>
     </nav>
     <nav
       className={`w-full h-[130px] ${
         scrollY > 100 ? "hidden" : "lg:hidden flex"
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
         <Link to="/addCart" className="relative">
             <i className="bi bi-basket3-fill text-[1.5rem] text-white"></i>
            {
             data.length > 0 && <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white flex justify-center items-center text-xs">{data.length}</span>
            }
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
         <li>
           <Link to="/login">sign up / login</Link>
         </li>
         <li>
           <Link to="/dashboard">dashboard</Link>
         </li>
       </ul>
     </div>
   </div> 
    </>
  )
}

export default Navbar