import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const RequireAuth = ({ children }) => {
  // react-firebase-hooks/auth returns an array with the current user and a loading state. When i have to use my own server side rendering, i need to use the user from the array. and set the loading state to false. so i can use the user in my server side rendering.
  const [user, loading, error] = useAuthState(auth);

  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    // if user is not signed in, redirect the user to the login page and pass the path they were trying to access so we can redirect them back to that path after they sign in. replace in navigate means that if the user is already signed in, they will be redirected to the home page instead of the login page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (error) {
    console.log(error);
  }
  // return children will be the component that is wrapped in the RequireAuth component
  return children;
};

export default RequireAuth;
