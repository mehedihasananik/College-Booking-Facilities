import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import RoomDetails from "../page/RoomDetails/RoomDetails";
import CollegeDetails from "../components/Colleges/CollegeDetails";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import MyColleges from "../page/MyColleges/MyColleges";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/roomDetails/:id", element: <RoomDetails /> },
      { path: "/college/:id", element: <CollegeDetails /> },
      {
        path: "/colleges",
        element: <MyColleges />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
