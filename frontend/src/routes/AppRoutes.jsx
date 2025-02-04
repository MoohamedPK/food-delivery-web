import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

// PAGES
import { Home,Cart, PlaceOrder, Verify, MyOrders} from "../pages/main"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <PlaceOrder />,
      },
      {
        path: "/verify",
        element: <Verify />,
      },
      {
        path: "/myorders",
        element: <MyOrders />,
      },
    ],
  },
]);


function AppRoutes() {
  return <RouterProvider router={router}/>
  
}

export default AppRoutes