import React from "react";
import { Link } from "react-router-dom";
import treatment from "../../../assets/images/treatment.png";
import PrimaryBtn from "../../Shared/PrimaryBtn";

const ServiceBanner = () => {
  return (
    <div className="hero py-24" id="service_banner">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="max-w-sm lg:max-w-md rounded-lg"
          alt="architecture"
        />
        <div className=" px-3 lg:pl-10">
          <h1 className="text-5xl font-bold" id="service_banner">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Link to="appointment">
            <PrimaryBtn>Book your appointment</PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
