import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryBtn from "../Shared/PrimaryBtn";

const Banner = () => {
  return (
    <div className="hero py-8 md:py-20 my-6 lg:my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          alt="a dental chair"
          className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
        />
        <div className="px-4">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <a href="#service_banner">
            <PrimaryBtn>Get Started</PrimaryBtn>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
