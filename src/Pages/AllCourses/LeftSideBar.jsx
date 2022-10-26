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
      <div className="text-info">
        {courses.map((course) => (
          <p key={course.id}>
            <Link to={`/view-courses/course/${course.id}`}>
              <button className="btn  m-2 w-48 h-20">{course.name}</button>
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
