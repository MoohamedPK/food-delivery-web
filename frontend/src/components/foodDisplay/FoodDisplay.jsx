import {useSelector } from "react-redux";
import FoodItem from "../foodItem/FoodItem";
import { useState } from "react";

function FoodDisplay({category}) {

    const {records} = useSelector(state => state.food)
    const [visible, setVisible] = useState(8)

    const handleVisibleItems = () => {
      setVisible(preValue => preValue + 8)
    }
    
  return (
    <div className="mb-32">
      <h1 className="text-2xl font-medium my-10">Top dishes near you </h1>

      <div
        className="food_list grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-12"
        id="food"
      >
        {records.slice(0, visible).map((item, index) => {
          if (category === "all" || category === item.category) {
            return <FoodItem key={index} {...item} />;
          }
        })}
      </div>

        {/* check if there's no more items, then don't show the see more button */}
        {records.length - 8 >= visible ? (
          <button onClick={handleVisibleItems} className="flex mx-auto md:mt-16 mt-10 underline md:text-base  md:px-3 md:py-2 px-2 py-1 text-xs  rounded-lg">
            See more...
          </button>
        ) 
        : (
          null
        ) } 
    </div>
  );
}

export default FoodDisplay