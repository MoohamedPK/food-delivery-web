import {assets} from "../../assets/assets";
import "../../components/navBar/navbar.css"
import { Link } from "react-router-dom";
import {LogOut, Package, ShoppingBasket, User2} from "lucide-react"
import MobileNavbar from "./MobileNavbar";
import useNavbar from "../../hooks/useNavbar";

function NavBar({ setShowlogin }) {

  const {
    menuActive,
    setMenuActive,
    mobileNav,
    setMobileNav,
    dropown,
    setDrodown,
    token,
    totalQuantity,
    handleLogout,
  } = useNavbar();

  return (
    <div className="sticky top-0 z-30 shadow-2xl shadow-orange-700/55">
      <div className="navbar bg-white flex justify-around items-center py-5">
        <Link to={"/"}>
          <img className="w-[130px] lg:w-[200px]" src={assets.logo} alt="" />
        </Link>
        <ul className="links md:flex items-center md:space-x-3 lg:space-x-8 md:text-sm font-bold hidden">
          <Link
            to={"/"}
            onClick={() => {
              setMenuActive("home");
            }}
            className={
              menuActive === "home"
                ? "toggle transition duration-500"
                : " cursor-pointer"
            }
          >
            Home
          </Link>
          <a
            href="#category"
            onClick={() => {
              setMenuActive("menu");
            }}
            className={
              menuActive === "menu"
                ? "toggle transition duration-500"
                : " cursor-pointer"
            }
          >
            Menu
          </a>
          <a
            href="#food"
            onClick={() => {
              setMenuActive("mobile app");
            }}
            className={
              menuActive === "mobile app"
                ? "toggle transition duration-500"
                : " cursor-pointer"
            }
          >
            Our Food
          </a>
          <a
            href="#contact"
            onClick={() => {
              setMenuActive("contact us");
            }}
            className={
              menuActive === "contact us"
                ? "toggle transition duration-500"
                : " cursor-pointer"
            }
          >
            Contact Us
          </a>
        </ul>

        <div className="flex items-center space-x-8">
          
          <div className="relative">
            <Link to={"/cart"}>
              <ShoppingBasket />
            </Link>
            <div
              className={
                totalQuantity === 0
                  ? ""
                  : "dot absolute -top-2 -right-2 size-3 bg-orange-600 rounded-full"
              }
            ></div>
          </div>

          {token ? (
            <div className="hidden md:block">
              <User2 className="cursor-pointer" onClick={() => setDrodown(!dropown)} />

              {dropown ? (
                <ul className="dropdown w-[150px] h-[120px] p-2 flex flex-col justify-between items-center absolute top-20 md:right-10 lg:right-20 xl:right-40 bg-white font-medium shadow-2xl shadow-black/70 rounded-lg">
                  
                  <Link
                    to={"/myorders"}
                    className="flex items-center space-x-3 w-full hover:bg-black hover:text-white px-3 py-2 rounded-lg transition duration-200 cursor-pointer "
                  >
                    <Package />
                    <p>Orders</p>
                  </Link>
                  <li
                    onClick={handleLogout}
                    className="flex items-center space-x-3 w-full hover:bg-black hover:text-white px-3 py-2 rounded-lg transition duration-200 cursor-pointer "
                  >
                    <LogOut />
                    <p>logout</p>
                  </li>
                </ul>
              ) : null}
            </div>
          ) : (
            <button
              className="hidden md:block relative group"
              onClick={() => {
                setShowlogin(true);
              }}
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-orange-700 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-600 group-hover:-rotate-180 ease"></span>
                <span className="relative">Sing In</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-orange-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
          )}

          <div
            onClick={() => {
              setMobileNav(!mobileNav);
            }}
            className="flex justify-end items-center relative md:hidden"
          >
            <span>MENU</span>
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <MobileNavbar
        mobileNav={mobileNav}
        setMobileNav={setMobileNav}
        setShowlogin={setShowlogin}
        handleLogout={handleLogout}
        token={token}
        dropown={dropown}
        setDrodown={setDrodown}
      />
    </div>
  );
}



export default NavBar
