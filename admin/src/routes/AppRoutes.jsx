import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Layout } from "../Layout"
import {Add, Orders, List} from "../pages/index"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // path: "/add",
        index:true,
        element: <Add/>,
      },
      {
        path: "/list",
        element: <List/>
      },
      {
        path: "/orders",
        element: <Orders/>
      }

    ]
  },
]);

const AppRoutes = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes