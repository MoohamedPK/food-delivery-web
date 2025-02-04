import { menu_list } from "../../assets/assets";
import "./foodMenu.css";

function FoodMenu({ category, setCategory }) {

    
  return (
    <div id="category">
      <div className=" space-y-7 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-medium">Explore our menu</h1>
        <p className="font-medium w-1/2 text-center">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise, one
          delicious meal at time .
        </p>
      </div>

      <div className="category flex flex-wrap justify-between items-center mt-10 text-center">
        {menu_list.map((menu, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer hover:-translate-y-4 transition duration-300"
              onClick={() => {
                setCategory((prev) =>
                  prev === menu.menu_name ? "all" : menu.menu_name
                );
              }}
            >
              <img
                className={category === menu.menu_name ? "toggle" : ""}
                src={menu.menu_image}
                alt=""
              />
              <p className="font-medium text-gray-600 text-lg mt-2">
                {menu.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-10 bg-gray-600 h-[2px]"></hr>
    </div>
  );
}

export default FoodMenu;
