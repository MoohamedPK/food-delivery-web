import { useState } from "react";
import { assets } from "../../assets/assets";
import {Link} from "react-router-dom"

const SideBar = () => {

  const [activeClass, setActiveClass] = useState("add");

  return (
    <div className=" md:w-[30%] md:border-t-0 md:border-r-1 md:border-r-black">
      <div className="options md:pt-8 pl-[20%] flex md:flex-col gap-6">
        <Link
          to={"/"}
          onClick={() => {
            setActiveClass("add");
          }}
          className={
            activeClass === "add"
              ? " bg-orange-500 text-white font-medium md:border-1 md:border-r-0 md:border-gray-500 px-3 md:px-8 py-3 flex items-center space-x-4 cursor-pointer md:rounded-ss-lg md:rounded-bl-lg rounded-b-lg "
              : "md:border-1 md:border-r-0 md:border-gray-500 px-3 md:px-8 py-3 flex items-center space-x-4 cursor-pointer"
          }
        >
          <img
            className="w-[20px] md:w-[30px] "
            src={assets.add_icon}
            alt=""
          />
          <p className="hidden md:block">Add items</p>
        </Link>

        <Link
          to={"/list"}
          onClick={() => {
            setActiveClass("list");
          }}
          className={
            activeClass === "list"
              ? "bg-orange-500 text-white font-medium md:border-1 md:border-r-0 md:border-gray-500 px-3 md:px-8 py-3 flex items-center space-x-4 cursor-pointer  md:rounded-ss-lg md:rounded-bl-lg rounded-b-lg"
              : "md:border-1 md:border-r-0 md:border-gray-500 px-3 md:px-8 py-3 flex items-center space-x-4 cursor-pointer rounded-ss-lg rounded-bl-lg"
          }
        >
          <img
            className="w-[20px] md:w-[30px]"
            src={assets.order_icon}
            alt=""
          />
          <p className="hidden md:block">List items</p>
        </Link>

        <Link
          to={"/orders"}
          onClick={() => {
            setActiveClass("order");
          }}
          className={
            activeClass === "order"
              ? "bg-orange-500 text-white font-medium md:border-1 md:border-r-0 md:border-gray-500 px-3 md:px-8 py-3 flex items-center space-x-4 cursor-pointer md:rounded-ss-lg md:rounded-bl-lg rounded-b-lg"
              : "md:border-1 md:border-r-0 md:border-gray-500 px-3 md:px-8 py-3 flex items-center space-x-4 cursor-pointer rounded-ss-lg rounded-bl-lg"
          }
        >
          <img
            className="w-[20px] md:w-[30px]"
            src={assets.order_icon}
            alt=""
          />
          <p className="hidden md:block">Order items</p>
        </Link>
      </div>
    </div>
  );
}


export default SideBar