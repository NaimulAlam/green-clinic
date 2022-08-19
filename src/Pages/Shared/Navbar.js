import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.error(error);
  }

  const logout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <a href="/#reviews">Reviews</a>
      </li>
      <li>
        <Link to="appointment">Appointment</Link>
      </li>
      <li>
        <a
          style={{
            whiteSpace: "nowrap",
          }}
          href="/#contact-us"
        >
          Contact Us
        </a>
      </li>
      <li>
        {user ? (
          <button className="btn btn-ghost" onClick={logout}>
            Sign Out
          </button>
        ) : (
          <Link to="login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a
          href="/"
          className="btn btn-ghost normal-case md:text-xl text-lg font-bold"
        >
          <span className="text-secondary">Green</span>
          &nbsp;Clinic
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex pr-10">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
