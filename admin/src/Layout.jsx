import { NavBar } from "./components/navBar/NavBar";
import SideBar from "./components/sideBar/SideBar"
import {Outlet} from "react-router-dom"
import { ToastContainer } from "react-toastify";

export const Layout = () => {
  return (
    <div className="">
      <ToastContainer/>
      <NavBar />
      <hr />

      <div className="flex gap-8">
        <SideBar />
        
        <Outlet/>
      </div>
    </div>
  );
}
