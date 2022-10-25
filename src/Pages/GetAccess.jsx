import React, { useContext } from "react";
import { AuthContext } from "../Contexts/UserContext";

const GetAccess = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div>
        {user && user.emailVerified ? (
          <>
            <p>You are Verified</p>
          </>
        ) : (
          <>
            <p>You are not Verified</p>
          </>
        )}
      </div>
    </div>
  );
};

export default GetAccess;
