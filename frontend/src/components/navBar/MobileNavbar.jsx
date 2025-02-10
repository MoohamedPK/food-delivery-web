import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { LogOut,Package, User2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function MobileNavbar({
  mobileNav,
  setMobileNav,
  setShowlogin,
  handleLogout,
  token,
  dropown,
  setDrodown,
}) {
  return (
    <>
      <AnimatePresence>
        {mobileNav && (
          <div>
            <motion.div
              initial={{
                x: 100,
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: 300,
              }}
              className="mobile_nav py-3 w-[300px] fixed top-0 right-0 z-40 shadow-gray-600 shadow-2xl bg-white h-full md:hidden flex flex-col space-y-10 items-center"
            >
              <div
                onClick={() => {
                  setMobileNav(!mobileNav);
                }}
                className="cursor-pointer flex justify-start items-center w-full ml-10 my-4"
              >
                <img src={assets.cross_icon} alt="" />
              </div>

              <ul className="w-full text-center space-y-7 font-medium text-lg">
                <div className="flex items-center flex-col">
                  {token ? (
                    <div className="flex flex-col items-center space-y-3">
                      <User2
                        className="cursor-pointer"
                        onClick={() => setDrodown(!dropown)}
                        size={40}
                      />

                      <AnimatePresence>
                        {dropown && (
                          <motion.ul
                            initial={{
                              x: 100,
                            }}
                            animate={{
                              x: 0,
                            }}
                            exit={{
                              x: 300,
                            }}
                            className="dropdown p-2 flex flex-col justify-around items-center  top-10 md:right-10 lg:right-20 xl:right-40 bg-white size-44 font-medium shadow-2xl shadow-black/70 rounded-lg"
                          >
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
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      className="relative text-lg group"
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
                </div>
                <li className="hover:bg-orange-600 transition duration-300 p-3  cursor-pointer text-base">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="hover:bg-orange-600 transition duration-300 p-3  cursor-pointer text-base">
                  <a href="#category">Menu</a>
                </li>
                <li className="hover:bg-orange-600 transition duration-300 p-3  cursor-pointer text-base">
                  <a href="#food">Our food</a>
                </li>
                <li className="hover:bg-orange-600 transition duration-300 p-3  cursor-pointer text-base">
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNavbar;




            