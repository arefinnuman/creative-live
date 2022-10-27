import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const { name, about, fee, img, rating, duration, id } = course;
  return (
    <div className="xl:container xl:mx-auto">
      <div className="card bg-base-100 shadow-2xl">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{about}</p>

          <p className="font-semibold text-neutral">{duration}</p>
          <div className="flex font-bold  items-center">
            <p> {fee} TK</p>
            <p className="flex items-center ps-2 ">
              {rating}
              <FaStar />
            </p>

            <Link to={`/get-access/${id}`}>
              <button className="btn btn-primary">Get Premium Access</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
