import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";

const Register = () => {
  // Get the context
  const { createUser, updateName, verifyEmail, updatePhotoURL } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleEmail = (event) => {
    const email = event.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, emailError: "Please provide a valid Email" });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setErrors({ ...errors, emailError: "" });
      setUserInfo({ ...userInfo, email: event.target.value });
    }
  };

  const handlePassword = (event) => {
    const password = event.target.value;

    const lengthError = password.length < 6;
    const noSymbolError = !/[\!\@\#\$\%\^\&\*]{1,}/.test(password);
    const noCapitalLetterError = !/[A-Z]{1,}/.test(password);

    if (lengthError) {
      setErrors({ ...errors, passwordError: "Must be at least 6 characters" });
      setUserInfo({ ...userInfo, password: "" });
    } else if (noSymbolError) {
      setErrors({
        ...errors,
        passwordError: "Must be at least One Symbol Letter",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (noCapitalLetterError) {
      setErrors({
        ...errors,
        passwordError: "Must be at least one Capital Letter",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setErrors({ ...errors, passwordError: "" });
      setUserInfo({ ...userInfo, password: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        updateName(name).then(() => {
          toast.success("Name updated successfully");
        });

        updatePhotoURL(photoURL).then(() => {
          toast.success("Photo URL updated successfully");
        });

        verifyEmail().then(() => {
          toast.success("Verification email sent");
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex-col lg:flex-col-">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            If you don't have any account then please signup first to become a
            member. And Book your Ticket.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo URL"
                name="photoURL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={handleEmail}
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            {errors.emailError && (
              <p className="text-error">{errors.emailError}</p>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={handlePassword}
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              {errors.passwordError && (
                <p className="text-error">{errors.passwordError}</p>
              )}
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
