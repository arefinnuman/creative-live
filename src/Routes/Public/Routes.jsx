import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import About from "../../Pages/About";
import AllCourses from "../../Pages/AllCourses/AllCourses";
import Blog from "../../Pages/Blog";
import CourseDetails from "../../Pages/CourseDetails";
import ErrorPage from "../../Pages/ErrorPage";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";

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
        element: <AllCourses />,
        loader: () =>
          fetch("https://creative-live-server.vercel.app/view-course"),
      },
      {
        path: "view-courses/course/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`https://creative-live-server.vercel.app/course/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
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
    ],
  },
]);
