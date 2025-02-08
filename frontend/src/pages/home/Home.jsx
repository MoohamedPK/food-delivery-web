import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import FoodMenu from "../../components/foodMenu/FoodMenu"
import Header from "../../components/header/Header"
import FoodDisplay from "../../components/foodDisplay/FoodDisplay";
import actGetFoodList from "../../store/foodProducts/actions/actGetFoodList";
import actGetUserCartItems from "../../store/cart/actions/actGetUserCartItem";

function Home() {

  const [category, setCategory] = useState("all");
  const token = useSelector((state) => state.auth.token);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actGetFoodList())

    if (token) {
      dispatch(actGetUserCartItems());
    }

  }, [dispatch, token])

  return (
    <div>
      <Header />
      <FoodMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
    </div>
  );
}

export default Home