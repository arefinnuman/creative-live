import { createBrowserRouter } from "react-router-dom";
import CoursesRoot from "../../Layout/CoursesRoot";
import Root from "../../Layout/Root";
import About from "../../Pages/About";
import AllCourses from "../../Pages/AllCourses/AllCourses";

import Blog from "../../Pages/Blog";
import CourseDetails from "../../Pages/CourseDetails";
import ErrorPage from "../../Pages/ErrorPage";
import FAQ from "../../Pages/FAQ";
import GetAccess from "../../Pages/GetAccess";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Profile from "../../Pages/Profile";
import Register from "../../Pages/Register";
import PrivateRoute from "../Private/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/view-courses",
        element: <CoursesRoot />,
        children: [
          {
            path: "/view-courses",
            element: <AllCourses />,
            loader: () =>
              fetch("https://creative-live-server.vercel.app/view-course"),
          },
          {
            path: "/view-courses/course/:id",
            element: <CourseDetails />,
            loader: ({ params }) =>
              fetch(
                `https://creative-live-server.vercel.app/course/${params.id}`
              ),
          },
        ],
      },

      {
        path: "/profile",
        element: <Profile />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "view-courses/get-access",
        element: (
          <PrivateRoute>
            <GetAccess />
          </PrivateRoute>
        ),
      },
      {
        path: "/get-access",
        element: (
          <PrivateRoute>
            <GetAccess />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
