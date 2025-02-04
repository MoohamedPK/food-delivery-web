import { useDispatch } from "react-redux"
import { removeItemFromCart } from "../../store/cart/cartSlice";
import CartSubTotalPrice from "../../components/cartSubTotalPrice/CartSubTotalPrice";
import useGetSubTotal from "../../hooks/useGetSubTotal";

function Cart() {

  const dispatch = useDispatch()

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  }

const {subTotalAmount, cartItems, records} = useGetSubTotal()
  
  return (
    <>
      <div className="">
        <div className="grid grid-cols-6 text-center items-center mt-[70px] text-gray-600 text-lg font-medium">
          <div className="">Items</div>
          <div className="">Title</div>
          <div className="">Price</div>
          <div className="">Quantity</div>
          <div className="">Total</div>
          <div className="">Remove</div>
        </div>
        <br />
        <hr className="bg-gray-400 h-[2px]" />

        <div className=" font-medium">
          {records.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <>
                  <div
                    key={index}
                    className="grid grid-cols-6 text-center items-center mt-8"
                  >
                    <div className=" ">
                      <img
                        className="w-[150px] rounded-xl"
                        src={`http://localhost:5000/images/${item.image}`}
                        alt=""
                      />
                    </div>
                    <div className="">{item.name}</div>
                    <div className="">${item.price}</div>
                    <div className="">{cartItems[item._id]}</div>
                    <div className="">${item.price * cartItems[item._id]}</div>
                    <button
                      onClick={() => {
                        handleRemoveFromCart(item._id);
                      }}
                      className="bg-black text-white w-fit mx-auto sm:px-4 sm:py-1 sm:text-sm md:text-medium md:px-8 md:py-2 rounded-full"
                    >
                      delete
                    </button>
                  </div>
                  <br />
                  <hr className="bg-gray-400 h-[2px]" />
                </>
              );
            }
          })}
        </div>
      </div>

      <CartSubTotalPrice subTotal={subTotalAmount} />
    </>
  );
}

export default Cart