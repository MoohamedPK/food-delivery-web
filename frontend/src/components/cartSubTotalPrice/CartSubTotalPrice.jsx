import { useNavigate } from "react-router-dom";

const CartSubTotalPrice = ({ subTotal }) => {
  
  const navigate = useNavigate();
  const handleCheckout = () => {
    if (subTotal === 0) {
      navigate("/cart")
      
    } else {
      navigate("/order")
    }
  }

  return (
    <div className="md:flex md:justify-start flex flex-col-reverse md:flex-row">
      <div className="left-side md:w-1/2 space-y-5 font-medium">
        <h1 className="font-bold text-xl">Cart Totals</h1>

        <div className="subtotal flex justify-between items-center ">
          <p>Subtotal</p>
          <span className="text-lg">${subTotal}</span>
        </div>

        <div className="fee flex justify-between items-center ">
          <p>Delivery Fee</p>
          <span className="text-lg">${subTotal === 0 ? 0 : 2}</span>
        </div>

        <div className=" flex justify-between items-center ">
          <p>Total</p>
          <span className="text-lg">${subTotal === 0 ? 0 : subTotal + 2}</span>
        </div>

        <div>
          <button
            onClick={handleCheckout}
            className="bg-orange-500 px-8 py-3 rounded-lg text-white "
          >
            PROCEEDE TO CHECKOUT
          </button>
        </div>
      </div>

      <div className="right-side mb-10 md:mt-0 md:ml-32 text-gray-600 text-lg space-y-8 md:flex-1 md:flex-wrap flex flex-col items-center w-full p-4">
        <p>If you have a promo code. Enter it here</p>

        <div className="flex flex-wrap md:space-y-5 items-center ">
          <input
            className="px-2 py-2"
            type="text"
            name=""
            id=""
            required
            placeholder="promo code"
          />
          <button className="text-white bg-black ml-4 px-10 py-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSubTotalPrice;
