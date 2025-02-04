import { useDispatch, useSelector } from "react-redux";
import {motion} from "motion/react"
import { actAddCartItems, actRemoveCartItems } from "../../store/cart/index";

const FoodItem = ({_id, name, price, image, description}) => {

    const dispatch = useDispatch();
    const {items} = useSelector(state => state.cart)
    const token = useSelector(state => state.auth.token)


    const handleAddToCart = () => {
      if (token) {
        dispatch(actAddCartItems(_id))
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
      className="animate-fadeIn cursor-pointer "
    >
      <div>
        <img
          className="rounded-lg shadow-xl shadow-gray-500/45"
          src={`http://localhost:5000/images/${image}`}
          alt=""
        />
      </div>

      <div className="info">
        <div className="rating flex justify-between items-center mt-8">
          <p className="font-medium md:text-lg">{name}</p>

          {!items[_id] ? (
            <span
              onClick={handleAddToCart}
              className="bg-orange-500 px-3 md:px-5 py-1 text-white rounded-lg"
            >
              Add
            </span>
            
          ) : (
            <div className="flex items-center space-x-5 font-bold text-xl text-white">
              <span
                onClick={handleAddToCart}
                className="add bg-black size-5 md:size-6 lg:size-7 rounded-full flex justify-center items-center"
              >
                +
              </span>
              <p className="text-black">{items[_id]}</p>
              <span
                onClick={handleRemove}
                className="remove bg-black size-5 md:size-6 lg:size-7 rounded-full flex justify-center items-center"
              >
                -
              </span>
            </div>
          )}
          </div>
        <p className="text-gray-600 my-4">{description}</p>
        <span className="font-bold text- text-xl">${price}</span>
      </div>
    </motion.div>
  );
}

export default FoodItem