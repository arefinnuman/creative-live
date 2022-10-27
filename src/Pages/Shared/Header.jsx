import React, { useContext } from "react";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../Asset/Logo.png";
import { AuthContext } from "../../Contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/view-courses">View Courses</Link>
            </li>

            <li>
              <Link to="/blog">Blogs</Link>
            </li>

            <li>
              <Link to="/faq">FAQ</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl">
          <img src={logo} alt="logo" className="h-10" />{" "}
        </Link>
        {user?.displayName ? <p>Hello, {user.displayName}</p> : <></>}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="view-courses">View Courses</Link>
          </li>

          <li>
            <Link to="/blog">Blogs</Link>
          </li>

          <li>
            <Link to="/faq">FAQ</Link>
          </li>

          <li>
            <Link to="about">About me</Link>
          </li>

          <li>
            <input type="checkbox" className="toggle mt-3" />
          </li>
        </ul>
      </div>

      {user?.email ? (
        <>
          <div className="navbar-end "></div>

          <Link to="/profile">
            <div className="mr-5 flex justify-around items-center">
              {user?.photoURL ? (
                <img
                  className="rounded-full mr-2"
                  style={{ height: "30px" }}
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <CgProfile className="text-2xl" />
              )}
            </div>
          </Link>
          <div className="">
            <Link>
              <IoMdLogOut className="text-2xl mr-2" onClick={handleLogOut} />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-end">
            <Link to="/login" className="btn  mr-2">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
