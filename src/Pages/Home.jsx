import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero min-h-screen">
      <section className="">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Learn
            <span className="text-primary"> without limits </span>
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Start, switch, or advance your career with more than 5,200 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <div className="flex flex-wrap justify-center">
            <Link>
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded btn-primary">
                Get started
              </button>
            </Link>
            <Link>
              <button className="px-8 py-3 m-2 text-lg border rounded btn">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
