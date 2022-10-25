import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const AllCourses = () => {
  const allCourses = useLoaderData();

  return (
    <div className="xl:container xl:mx-auto">
      <div className="grid md:m-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-center gap-5 ">
        {allCourses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
