import { useDispatch } from "react-redux"
// import { removeItemFromCart } from "../../store/cart/cartSlice";
import CartSubTotalPrice from "../../components/cartSubTotalPrice/CartSubTotalPrice";
import useGetSubTotal from "../../hooks/useGetSubTotal";
import {Lottihandler} from "../../feedback/Lottihandler"
import { actDeleteCartItem, actGetUserCartItems } from "../../store/cart";

function Cart() {

  const dispatch = useDispatch()

  const handleDeleteItemFromCart = (itemId) => {
    dispatch(actDeleteCartItem(itemId)).unwrap().then(() => {
      dispatch(actGetUserCartItems());
    })
  }

const {subTotalAmount, cartItems, records} = useGetSubTotal()
  
  return (
    <>
      <div className="">
        <div className="grid grid-cols-6 text-center items-center mt-[70px] text-black text-sm md:text-base font-medium">
          <div className="">Items</div>
          <div className="">Title</div>
          <div className="">Price</div>
          <div className="">Quantity</div>
          <div className="">Total</div>
          <div className="">Remove</div>
        </div>
        <br />
        <hr className="bg-gray-400 h-[2px]" />

        <div className="font-medium">
          
            {Object.keys(cartItems).length === 0 ? (
              <Lottihandler type={'empty'} message={"Your cart is empty"}/>
            ) : (

              records.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <>
                    <div
                      key={index}
                      className="grid grid-cols-6 text-center items-center mt-3 text-xs mx-2 md:mx-0 md:text-base"
                    >
                      <div className="mx-auto">
                        <img
                          className="w-[60px] md:w-[150px] rounded-xl"
                          src={`https://food-delivery-web-backend-xjvc.onrender.com/images/${item.image}`}
                          alt=""
                        />
                      </div>
                      <div className="text-xs mx-2 md:mx-0 md:text-base">
                        {item.name}
                      </div>
                      <div className="">${item.price}</div>
                      <div className="">{cartItems[item._id]}</div>
                      <div className="">${item.price * cartItems[item._id]}</div>
                      <button
                        onClick={() => {
                          handleDeleteItemFromCart(item._id);
                        }}
                        className="bg-black text-white w-fit mx-auto px-2 py-1 rounded-lg"
                      >
                        delete
                      </button>
                    </div>
                    <br />
                    <hr className="bg-gray-400 h-[2px]" />
                  </>
                );
              }
            }
            )
          )}
            
        </div>
      </div>

      <CartSubTotalPrice subTotal={subTotalAmount} />
    </>
  );
}

export default Cart