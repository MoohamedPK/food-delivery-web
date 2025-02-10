import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {assets} from "../../assets/assets"
import {actGetUserOrders, actUpdateStatus} from "../../store/userOrders/index"
import {toast} from "react-toastify"

function Orders() {

  const dispatch = useDispatch()
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(actGetUserOrders())
  }, [dispatch])

  const handleStatusChange = (event, orderId) => {
    const status = event.target.value
    
    dispatch(actUpdateStatus({orderId, status})).unwrap().then((data) => {
      if (data.success) {
        dispatch(actGetUserOrders())
        return toast.success(data.message)
      }
    })
    
  }

  return (
    <div className="mt-10 w-full">
      <h1 className="md:text-3xl text-xl font-medium">My orders</h1>
      <div className="space-y-4 mt-10">
        {orders.map((order, index) => (
          <div className="order_item text-sm font-medium grid lg:grid-cols-4 lg:text-center space-y-3 lg:space-y-0 items-center border border-orange-600 rounded-xl px-5 py-3" key={index}>
            <div className="space-y-2 text-start">
              <img src={assets.parcel_icon} alt="" />
              <p className="">
                {order.items.map((item, index) => {
                  if (index === item.length - 1) {
                    return item.name + " x" + item.quantity;
                  } else {
                    return item.name + " x" + item.quantity + ", ";
                  }
                })}
              </p>

              <p className="text-orange-600 font-bold ">
                {order.address.first_name.toUpperCase() +
                  " " +
                  order.address.last_name.toUpperCase()}
              </p>
              <p>
                {order.address.street +
                  ", " +
                  order.address.city +
                  ", " +
                  order.address.state +
                  ", " +
                  order.address.zip_code +
                  ", "}
              </p>
              <p>{order.address.country.toUpperCase()}</p>
              <p>{order.address.phone}</p>
            </div>

            <p className="">items: {order.items.length}</p>
            <p className="">${order.amount}</p>
            <select onChange={(event) => {handleStatusChange(event, order._id)}} value={order.status}  className="w-[200px] lg:mx-auto bg-black text-white text-center py-2 rounded-xl">
              <option value="Food processing">Food processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders