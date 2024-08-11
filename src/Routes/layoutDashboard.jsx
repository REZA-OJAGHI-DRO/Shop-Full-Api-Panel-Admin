import React from 'react'
import { Outlet } from "react-router-dom";

function LayoutDashboard() {
  return (
    <div>
    <main>
      <Outlet />
    </main>
  </div>
  )
}

export default LayoutDashboard