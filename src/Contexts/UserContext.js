import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(true);

  // 1. Create User
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 2. Update Name
  const updateName = (name) => {
    setLoader(true);
    return updateProfile(auth.currentUser, { displayName: name });
  };

  // 3. Verify Email
  const verifyEmail = () => {
    setLoader(true);
    return sendEmailVerification(auth.currentUser);
  };

  //  4. Sign In with Google
  const signInWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  //  5. Logout
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  //  6. Sign In with Email and Password
  const logIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 7. Reset Password
  const resetPassword = (email) => {
    setLoader(true);
    return sendPasswordResetEmail(auth, email);
  };

  // 8. Sign in With Github
  const signInWithGithub = () => {
    setLoader(true);
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  //  Update User Photo URL
  const updatePhotoURL = (photoURL) => {
    setLoader(true);
    return updateProfile(auth.currentUser, { photoURL });
  };

  const authInfo = {
    user,
    loader,
    logIn,
    updateName,
    verifyEmail,
    resetPassword,
    logOut,
    createUser,
    signInWithGoogle,
    signInWithGithub,
    updatePhotoURL,
  };

  //   Auth State Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
