import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import RoomDetails from "../page/RoomDetails/RoomDetails";
import CollegeDetails from "../components/Colleges/CollegeDetails";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import MyColleges from "../page/MyColleges/MyColleges";
import Admission from "../page/Admission/Admission";
import PrivateRoute from "./PrivateRoute";
import MyCollege from "../page/MyCollege/MyCollege";
import MyCollegeDetails from "../page/MyCollege/myCollegeDetails";
import Profile from "../page/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/roomDetails/:id", element: <RoomDetails /> },
      { path: "/college/:id", element: <CollegeDetails /> },
      { path: "/myCollegeDetails/:id", element: <MyCollegeDetails /> },
      {
        path: "/colleges",
        element: <MyColleges />,
      },
      {
        path: "/admission",
        element: (
          <PrivateRoute>
            <Admission />
          </PrivateRoute>
        ),
      },
      {
        path: "/myCollege",
        element: (
          <PrivateRoute>
            <MyCollege />
          </PrivateRoute>
        ),
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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
