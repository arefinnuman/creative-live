import React from "react";

const CourseCard = ({ course }) => {
  const { name, about, fee, img, rating, duration } = course;
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{about.slice(0, 100)}</p>
        <p>{duration}</p>
        <div className="flex font-bold align-center">
          <p> {fee} TK</p>
          <p>{rating}</p>
          <button className="btn btn-primary">Get Access</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
