import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryBtn from "../../Shared/PrimaryBtn";

const ServiceBanner = () => {
  return (
    <div class="hero py-24">
      <div class="hero-content flex-col lg:flex-row">
        <img src={treatment} class="max-w-sm lg:max-w-md rounded-lg" alt="architecture" />
        <div className=" pl-10">
          <h1 class="text-5xl font-bold ">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryBtn>Book your appointment</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
