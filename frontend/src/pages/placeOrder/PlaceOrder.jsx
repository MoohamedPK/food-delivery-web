import useGetSubTotal from "../../hooks/useGetSubTotal"
import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux";
import { actPlaceorder } from "../../store/cart/index";

function PlaceOrder() {

  const { subTotalAmount } = useGetSubTotal();
  
  const {register, handleSubmit} = useForm()
  const dispatch = useDispatch() 

  const submitForm = (formData) => {
    dispatch(actPlaceorder({ formData, subTotalAmount }));
  }

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col md:flex-row md:items-start md:justify-between  gap-10 mt-[100px]"
    >
      <div className="left-side w-full">
        <p className="font-medium md:text-3xl text-2xl mb-10">Delivery information</p>
        <div className="multi-inputs flex  gap-8">
          <input
            {...register("first_name")}
            className="w-full mb-4 p-2 outline-orange-500"
            type="text"
            placeholder="First name"
            required
          />
          <input
            {...register("last_name")}
            className="w-full mb-4 p-2 outline-orange-500"
            type="text"
            placeholder="Last name"
            required
          />
        </div>
        <input
          {...register("email")}
          className="w-full mb-4 p-2 outline-orange-500"
          type="email"
          placeholder="Email adress"
          required
        />
        <input
          {...register("street")}
          className="w-full mb-4 p-2 outline-orange-500"
          type="text"
          placeholder="Street"
          
        />

        <div className="multi-inputs flex  gap-8">
          <input
            {...register("city")}
            className="w-full mb-4 p-2 outline-orange-500"
            type="text"
            placeholder="City"
            required
          />
          <input
            {...register("state")}
            className="w-full mb-4 p-2 outline-orange-500"
            type="text"
            placeholder="State"

          />
        </div>
        <div className="multi-inputs flex gap-8">
          <input
            {...register("zip_code")}
            className="w-full mb-4 p-2 outline-orange-500"
            type="text"
            placeholder="Zip code"
            
          />
          <input
            {...register("country")}
            className="w-full mb-4 p-2 outline-orange-500"
            type="text"
            placeholder="Country"
            required
          />
        </div>
        <input
          {...register("phone")}
          className="w-full mb-4 p-2 outline-orange-500"
          type="text"
          placeholder="Phone"
          required
        />
      </div>

      <div className="right-side w-full space-y-5 font-medium">
        <h1 className="font-bold text-xl">Cart Totals</h1>

        <div className="subtotal flex justify-between items-center ">
          <p>Subtotal</p>
          <span className="">${subTotalAmount}</span>
        </div>
        <hr className="border-1 border-black" />

        <div className="fee flex justify-between items-center ">
          <p>Delivery Fee</p>
          <span className="">$2</span>
        </div>

        <div className=" flex justify-between items-center ">
          <p>Total</p>
          <span className="">
            ${subTotalAmount === 0 ? 0 : subTotalAmount + 2}
          </span>
        </div>

        <div>
          <button
            type="submit"
            className="bg-orange-500 px-8 py-3 rounded-lg text-white w-full mt-3 md:w-auto md:mt-0"
          >
            PROCEEDE TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder