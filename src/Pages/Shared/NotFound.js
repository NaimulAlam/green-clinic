import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="hero min-h-screen bg-slate-100">
      <div className="hero-content text-center ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Oops!!!</h1>
          <p className="mb-5">Page you're looking for doesn't Exist...</p>
          <Link to="">
            <button className="btn btn-outline btn-accent">GO HOME</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
