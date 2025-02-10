import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

// PAGES
import { Home,Cart, PlaceOrder, Verify, MyOrders, Error} from "../pages/main"


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        index: true,
        element: <Home />,
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