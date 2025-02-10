import { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

function Add() {
  const url = "https://food-delivery-web-backend-3cig.onrender.com";
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salade",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);

    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salade ",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="w-full text-gray-600 mt-10 mx-auto">
      <form className="space-y-8 flex flex-col" onSubmit={handleSubmitForm}>
        <div className="image_upload flex flex-col justify-center items-center gap-5 border-1 border-black md:w-[35%] w-full mx-auto py-3 rounded-lg">
          <p>Upload your image</p>
          <label htmlFor="image" className="cursor-pointer">
            <img
              className="md:w-[120px] w-full"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="add_name flex flex-col gap-5 md:w-[35%] ">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            className="px-4 py-3 font-medium"
            type="text"
            name="name"
            value={data.name}
            placeholder="product name"
            required
          />
        </div>

        <div className="add_name flex flex-col gap-5 md:w-[35%] ">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            className="px-4 py-3 font-medium"
            name="description"
            value={data.description}
            placeholder="product description"
            rows="6"
            required
          ></textarea>
        </div>

        <div className="category-price flex items-center space-x-5 gap-5">
          <div className="category flex flex-col gap-5">
            <p>Product Category</p>
            <select
              className="px-5 py-2"
              onChange={onChangeHandler}
              name="category"
            >
              <option value="Salade">Salade</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="price flex flex-col gap-5">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              className="px-5 py-2"
              type="number"
              value={data.price}
              name="price"
              required
              placeholder="$10"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-black text-white mx-auto px-8 py-1 my-4 md:px-18 md:py-3 rounded-lg font-medium cursor-pointer"
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
