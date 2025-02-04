import { useSearchParams } from "react-router-dom"
import {useDispatch} from "react-redux"
import {actVerifyPayment} from "../../store/cart/index.js";

function Verify() {

    const dispatch = useDispatch();
    const [searchParamas, setSearchParams] = useSearchParams() 
    const success = searchParamas.get("success")
    const orderId = searchParamas.get("orderId")

      dispatch(actVerifyPayment({ orderId, success }))
    
  return (
    <div className="verify h-screen flex justify-center items-center "> 
      <div className="spinner size-[100px] border-4 border-gray-400 border-t-orange-600 rounded-full animate-spinner">

      </div>
    </div>
  )
}

export default Verify