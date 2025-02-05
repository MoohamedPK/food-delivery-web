import { Outlet } from "react-router-dom"
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import LoginPage from "../components/logInPage/LoginPage";

function MainLayout() {

  const [showLogin, setShowLogin] = useState(false)
  

  return (
      <div className="font-main">
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