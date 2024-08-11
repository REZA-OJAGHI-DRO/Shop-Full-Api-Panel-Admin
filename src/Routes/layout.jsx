import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../componentGeneral/footer";
import Navbar from "../componentGeneral/navbar";

function Layout() {
  return (
    <div>
      <Navbar/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;