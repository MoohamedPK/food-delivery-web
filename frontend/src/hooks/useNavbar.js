import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../store/auth/authSlice";
import { resetAfterLogout } from "../store/cart/cartSlice";
import { resetOrdersAfterLogout } from "../store/orders/ordersSlice";
import { useNavigate } from "react-router-dom";
function useNavbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [menuActive, setMenuActive] = useState("home");
  const [mobileNav, setMobileNav] = useState(false);
  const [dropown, setDrodown] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const { token } = useSelector((state) => state.auth);

  const totalQuantity = Object.values(cartItems).reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const handleLogout = () => {
    dispatch(logOut())
    dispatch(resetAfterLogout())
    dispatch(resetOrdersAfterLogout())
    navigate("/")
  };

  return {
    menuActive,
    setMenuActive,
    mobileNav,
    setMobileNav,
    dropown,
    setDrodown,
    token,
    totalQuantity,
    handleLogout,
  };
}

export default useNavbar;
