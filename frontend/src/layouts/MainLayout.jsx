import { Outlet } from "react-router-dom"
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import LoginPage from "../components/logInPage/LoginPage";
import { ToastContainer } from "react-toastify";

function MainLayout() {

  const [showLogin, setShowLogin] = useState(false)
  

  return (
      <div className="font-main">
        <ToastContainer/>
        {showLogin && <LoginPage setShowLogin={setShowLogin} />}
        <NavBar setShowlogin={setShowLogin} />
        <div className="container flex flex-col h-screen px-[30px] mx-auto space-y-10">
          <Outlet />
          <Footer />
        </div>
      </div>
  );
}

export default MainLayout