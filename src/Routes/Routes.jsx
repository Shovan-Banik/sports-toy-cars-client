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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          element: <MyToy></MyToy>
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