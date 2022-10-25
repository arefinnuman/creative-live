import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../Pages/AllCourses/LeftSideBar";

const CoursesRoot = () => {
  return (
    <div className="grid md:grid-cols-5 xl:container xl:mx-auto xl:gap-5">
      <div className="col-span-1">
        <LeftSideBar />
      </div>
      <div className="col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default CoursesRoot;
