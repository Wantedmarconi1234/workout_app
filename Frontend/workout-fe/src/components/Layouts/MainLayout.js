import { Outlet } from "react-router-dom"
import Navbar from "../pages/Navbar"


function MainLayout() {
  return (
    <main className="main-layout">
      <Navbar />
      <Outlet />  
    </main>
  )
}

export default MainLayout