import error from "../assets/lotties/error.json"
import cartLoading from "../assets/lotties/cart loading.json"
import notFound from "../assets/lotties/404.json"
import empty from "../assets/lotties/empty.json"
import Lottie from "lottie-react"

const lottiesMap = {
    error,
    cartLoading,
    notFound,
    empty
}

export const Lottihandler = ({type, message}) => {
    const lottie = lottiesMap[type]
  return (
    <div className="flex flex-col mt-20 items-center  h-screen text-center text-xl font-semibold">
      <Lottie animationData={lottie} className="w-[170px]"></Lottie>
      {message && <h1 className=" font-medium">{message}</h1>}
    </div>
  );
}
