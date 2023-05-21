import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Blog from "../pages/Blog/Blog";
import AddAToy from "../pages/AddAToy/AddAToy";
import MyToy from "../pages/MyToy/MyToy";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import AllToy from "../pages/AllToy/AllToy";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/allToys',
          element: <AllToy></AllToy>
        },
        {
          path: 'viewDetails/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
        },
        {
          path:'/addAToy',
          element:<AddAToy></AddAToy>
        },
        {
          path:'/myToy',
          element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
        },
        {
          path:'/updateToy/:id',
          element:<UpdateToy></UpdateToy>,
          loader:({params})=>fetch(`https://sports-car-toys-zone.vercel.app/toy/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
  ]);
  export default router;