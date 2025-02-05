import {useSelector } from "react-redux";
import FoodItem from "../foodItem/FoodItem";

function FoodDisplay({category}) {

    const {records} = useSelector(state => state.food)
    
  return (
    <div className="mb-32">
      <h1 className="text-2xl font-medium my-10">Top dishes near you </h1>

      <div
        className="food_list grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-12"
        id="food"
      >
        {records.map((item, index) => {
          
          if (category === "all" || category === item.category) {
            return <FoodItem key={index} {...item} />;
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay