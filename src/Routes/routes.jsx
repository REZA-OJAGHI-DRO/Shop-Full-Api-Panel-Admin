import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Shop from "../Shop/shop.jsx";
import About from "../About/About.jsx";
import Testimonials from "../testimonials/testimonials.jsx";
import Contact from "../Contact/contact.jsx";
import Login from "../login/login.jsx";
import AddCart from "../AddCart/addCart.jsx";

import "../App.css";
import Layout from "./layout.jsx";
import LayoutDashboard from "../dashboard/dashboard.jsx";

function router() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addCart" element={<AddCart />} />
          </Route>
          <Route element={<LayoutDashboard />}>
            <Route path="/dashboard" element={<LayoutDashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default router;
