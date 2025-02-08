import { useDispatch, useSelector } from "react-redux";
import {motion} from "motion/react"
import { actAddCartItems, actRemoveCartItems } from "../../store/cart/index";

const FoodItem = ({_id, name, price, image, description}) => {

    const dispatch = useDispatch();
    const {items} = useSelector(state => state.cart)
    const {token} = useSelector(state => state.auth)

    const handleAddToCart = () => {
      if (token) {
        dispatch(actAddCartItems(_id));
      }
    }
    
    const handleRemove = () => {
      if (token) {
        dispatch(actRemoveCartItems(_id));
      } 
    };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="animate-fadeIn cursor-pointer shadow-2xl shadow-gray-500 border-2 border-orange-600 px-3 py-2 rounded-xl hover:scale-95 transition duration-300"
    >
      <div>
        <img
          className="rounded-lg shadow-xl shadow-gray-500/45 sm:w-full md:w-fit"
          src={`https://food-delivery-web-backend-xjvc.onrender.com/images/${image}`}
          alt=""
        />
      </div>

      <div className="info">
        <div className="rating flex justify-between items-center mt-8">
          <p className="font-semibold">{name}</p>

          {!items[_id]? (

              <span
                onClick={handleAddToCart}
                className="bg-orange-500 px-3 md:px-5 py-1 text-sm text-white rounded-lg"
              >
                Add
              </span>

          ) : (
            <div className="flex items-center space-x-5 text-lg text-white">
              <span
                onClick={handleAddToCart}
                className="add bg-black size-5 md:size-5 lg:size-6 rounded-full flex justify-center items-center"
              >
                +
              </span>
              <p className="text-black">{items[_id]}</p>
              <span
                onClick={handleRemove}
                className="remove bg-black size-5 md:size-5 lg:size-6 rounded-full flex justify-center items-center"
              >
                -
              </span>
            </div>
          )}
        </div>
        <p className="text-gray-500 my-4 text-sm">{description}</p>
        <span className="font-bold text- text-xl">${price}</span>
      </div>
    </motion.div>
  );
}

export default FoodItem