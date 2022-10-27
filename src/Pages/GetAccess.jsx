import Lottie from "lottie-react";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import DownloadAnimation from "../Asset/DownloadAnimation.json";
import { AuthContext } from "../Contexts/UserContext";

const GetAccess = () => {
  const { user } = useContext(AuthContext);

  const course = useLoaderData();
  const { name, about, fee, img, rating, duration } = course;
  console.log("course", course);
  console.log(name);

  const ref = React.createRef();

  return (
    <div className="flex justify-center items-center min-h-screen text-center ">
      <div className="">
        <div className="flex items-center justify-center">
          <Lottie
            className="w-64 h-64 text-center"
            animationData={DownloadAnimation}
          />
        </div>
        <div>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button className="btn btn-success" onClick={toPdf}>
                Generate Pdf
              </button>
            )}
          </Pdf>
          <div ref={ref}>
            <h1>{name}</h1>
            <p>{about}</p>
            <p>Fee:{fee}</p>
            <p>Rating {rating}</p>
          </div>
        </div>

        {user && user.emailVerified ? (
          <>
            <p>You are Verified. Thank you so much</p>
          </>
        ) : (
          <>
            <p>
              You are not Verified Yet, Verified yourself first Other wise your
              id will be Disabled
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default GetAccess;
