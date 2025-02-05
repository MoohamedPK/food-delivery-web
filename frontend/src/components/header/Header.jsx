import "./header.css"


function Header() {
  return (
    <div className="header w-[100%] h-screen md:h-[43vw]  rounded-lg bg-no-repeat relative my-[30px] font-medium text-white ">
      <div className="header_content absolute bottom-[18%] md:bottom-8 left-[6%] flex flex-col items-start md:w-1/2 gap-7 animate-fadeIn">
        <h1 className="font-medium text-[40px] md:text-[50px] lg:text-[60px]  ">
          Order your <br></br>favorite food here
        </h1>
        <p className="font-normal ">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise, one
          delicious meal at time .
        </p>
        <button className="bg-white text-black px-2 py-2  lg:px-14 lg:py-4 rounded-full ">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header