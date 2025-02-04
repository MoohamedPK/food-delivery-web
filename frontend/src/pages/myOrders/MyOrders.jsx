import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import actGetUserOrders from "../../store/orders/actions/actGetUserOrders";
// import {Package} from "lucide-react"
import {assets} from "../../assets/assets"

function MyOrders() {

  const dispatch = useDispatch();
  const {userOrders} = useSelector(state => state.orders)
  
  useEffect(() => {
    dispatch(actGetUserOrders());
  }, [dispatch])

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-medium">My orders</h1>
        <div className="space-y-4 mt-10">
        {userOrders.map((order, index) => {
          return (
            <div key={index} className="p-4 lg:grid lg:grid-cols-5 sm:flex sm:flex-col items-start space-y-3 lg:items-center text-center font-medium border border-orange-600 rounded-xl">
              <div className="flex items-center text-start space-x-6">
                {/* <Package className="size-14 "/> */}
                <img src={assets.parcel_icon} alt="" />
                <p>
                  {order.items.map((item, index) => {
                    //add comma if there is more than one item
                    if (index === order.items.length - 1) {
                      return item.name + " x" + item.quantity;
                    } else {
                      return item.name + " x" + item.quantity + ", ";
                    }
                  })}
                </p>
              </div>
              <p>${order.amount}.00</p>
              <p>items : {order.items.length}</p>
                <li className="list-disc ">
                  <b>Order status :{order.status}</b>
                </li>
              <button className="bg-black text-white p-2 rounded-lg lg:w-[200px] w-[150px] text-sm md:text-base lg:mx-auto">Track Order</button>

            </div>
          );
        })}
              
      </div>
    </div>
  )
}

export default MyOrders