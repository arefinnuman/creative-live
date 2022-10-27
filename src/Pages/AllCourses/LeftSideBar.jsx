import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    fetch("https://creative-live-server.vercel.app/view-course")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <div>
      <div className="flex flex-col my-5">
        {courses.map((course) => (
          <p
            className="text-neutral hover:text-primary hover:underline text-center mt-3  "
            key={course.id}
          >
            <Link to={`/view-courses/course/${course.id}`}>{course.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
