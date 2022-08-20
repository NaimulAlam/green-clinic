import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  // from is the path that the user was trying to access before they were redirected to the login page, so we can redirect them back to that path after they sign in or to the home page if they are already signed in
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || gUser) {
      console.log(user, gUser);
      // if user is signed in, redirect to the from(where he was) location
      navigate(from, { replace: true });
    }
  }, [user, gUser, navigate, from]);

  const onSubmit = async (data) => {
    console.log("onSubmit", data);
    await signInWithEmailAndPassword(data.email, data.password);
  };

  if (loading || gLoading) {
    return <Loading />;
  }

  if (error || gError) {
    console.error("err", gError);
    signInError = (
      <p className="text-red-500 text-xs p-1 text-center">
        {error?.message || gError?.message}
      </p>
    );
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Email is not valid",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              type="submit"
              value="Login"
              className="btn btn-outline-primary w-full max-w-xs text-white"
            />
          </form>
          <p className="text-center text-sm">
            New to Green Clinc?{" "}
            <Link to="/signup" className="text-secondary">
              Create New Account
            </Link>
          </p>

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
