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

      <div className="flex md:flex-row flex-col gap-8 mx-4">
        <SideBar />
        <Outlet/>
      </div>
    </div>
  );
}
