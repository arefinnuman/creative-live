import Lottie from "lottie-react";
import React, { useContext } from "react";
import DownloadAnimation from "../Asset/DownloadAnimation.json";
import { AuthContext } from "../Contexts/UserContext";

const GetAccess = () => {
  const { user } = useContext(AuthContext);
  const onButtonClick = () => {
    fetch("Tutorial.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let aLInk = document.createElement("a");
        aLInk.href = fileURL;
        aLInk.download = "Tutorial.pdf";
        aLInk.click();
      });
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-center ">
      <div>
        <Lottie animationData={DownloadAnimation} />
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
        <div className="m-2">
          <h3>Click on below Button to download pdf file</h3>
          <button onClick={onButtonClick} className="btn btn-primary m-2">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetAccess;
