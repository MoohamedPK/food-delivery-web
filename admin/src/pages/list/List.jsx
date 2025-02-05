import { useEffect, useState } from "react"
import axios from "axios";
import {toast} from "react-toastify"

function List() {

  const url = "https://food-delivery-web-backend-xjvc.onrender.com"
  const [list, setList] = useState([]);

  const fetchList = async () => {

    const response = await axios.get(`${url}/api/food/list`)
    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error("can't get list")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  const deleteProductHandler = async (id) => {
    const response = await axios.post(`${url}/api/food/remove`, {id:id})
    await fetchList()
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.error);
    }
  }

  return (
    <div className="w-full ">
      <div className="overflow-x-scroll">
        <div className="grid grid-cols-6 text-center items-center mt-10 text-gray-600 text-lg font-medium">
          <div className="">Image</div>
          <div className="">Name</div>
          <div className="">Category</div>
          <div className="">Price</div>
          <div className="">Action</div>
        </div>
        <br />
        <hr className="bg-gray-400 h-[2px]" />

        <div className=" font-medium">
          {list.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="grid grid-cols-6 text-center items-center mt-8"
                >
                  <div className=" ">
                    <img
                      className="w-[90px] rounded-xl"
                      src={`${url}/images/` + item.image}
                      alt=""
                    />
                  </div>
                  <div className="">{item.name}</div>
                  <div className="">{item.category}</div>
                  <div className="">{item.price}</div>
                  <button
                    onClick={() => deleteProductHandler(item._id)}
                    className="bg-black text-white w-fit mx-auto sm:px-4 sm:py-1 sm:text-sm md:text-medium md:px-8 md:py-2 rounded-full cursor-pointer"
                  >
                    delete
                  </button>
                </div>
                <br />
                <hr className="bg-gray-400 h-[2px]" />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default List
