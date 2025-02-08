import { Outlet } from "react-router-dom"
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import LoginPage from "../components/logInPage/LoginPage";
import { ToastContainer } from "react-toastify";

function MainLayout() {

  const [showLogin, setShowLogin] = useState(false)
  

  return (
    <div className="font-main container flex flex-col h-screen">
      <ToastContainer className="top-20" />
      {showLogin && <LoginPage setShowLogin={setShowLogin} />}
      <NavBar setShowlogin={setShowLogin} />
      <div className="px-[9%] mx-auto space-y-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout