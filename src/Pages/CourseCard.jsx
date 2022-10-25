import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { name, about, fee, img, rating, duration, id } = course;
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {about.length > 250 ? (
            <p>
              {about.slice(0, 250) + "..."}{" "}
              <Link to={`course/${id}`} className="text-info">
                Read More
              </Link>{" "}
            </p>
          ) : (
            <p>{about}</p>
          )}
        </p>
        <p className="font-semibold text-neutral">{duration}</p>
        <div className="flex font-bold  items-center">
          <p> {fee} TK</p>
          <p className="flex items-center ps-2 ">
            {rating}
            <FaStar />
          </p>

          <Link to="get-access">
            <button className="btn btn-primary">Get Access</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
