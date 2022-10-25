import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import CourseCard from "../CourseCard";

const AllCourses = () => {
  const allCourses = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="">
      <div className="grid md:m-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-center gap-5  ">
        {allCourses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
