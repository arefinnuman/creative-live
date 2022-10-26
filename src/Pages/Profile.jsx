import React, { useContext } from "react";
import { AuthContext } from "../Contexts/UserContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 ">
        <img
          src={user?.photoURL ? user.photoURL : <p>view profile</p>}
          alt="Profile"
          className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
        />
        <div>
          <h2 className="text-xl font-semibold">
            {user?.displayName ? user.displayName : "Name Not Available"}
          </h2>
          <span className="block pb-2 text-sm">{user?.email}</span>
          <span className="flex items-center space-x-2 w-full">
            <span className="text-small">
              Email Status:
              {user?.emailVerified ? (
                <span className="text-success"> Verified</span>
              ) : (
                <span className="text-error"> Not Verified</span>
              )}
            </span>
          </span>

          <p>ID: {user?.uid}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
