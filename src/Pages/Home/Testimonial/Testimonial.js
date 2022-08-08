import React from "react";
import TestimonialCard from "./TestimonialCard";
import marker from "../../../assets/icons/marker.svg";
import clock from "../../../assets/icons/clock.svg";
import phone from "../../../assets/icons/phone.svg";
import testimonialBG from "../../../assets/images/testimonial_bg.png";

const Testimonial = () => {
  return (
    <div className="pl-2 md:pl-16 lg:my-24">
      <div className="relative grid grid-cols-2">
        <div>
          <h1 className="text-secondary font-bold text-4xl my-5">
            Testimonial
          </h1>
          <h2 className="text-4xl lg:text-6xl mt-5 mb-24 lg:mb-48">
            What Our Patients Says
          </h2>
        </div>
        <div className="absolute top-0 right-16 lg:right-28">
          <img className="w-24 lg:w-48" src={testimonialBG} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2 md:px-10">
        <TestimonialCard
          cardTitle="Opening Hours"
          bgClass="bg-gradient-to-r from-secondary to-primary"
          img={clock}
        />
        <TestimonialCard
          cardTitle="Our Locations"
          bgClass="bg-accent"
          img={marker}
        />
        <TestimonialCard
          cardTitle="Contact Hours"
          bgClass="bg-gradient-to-r from-secondary to-primary"
          img={phone}
        />
      </div>
    </div>
  );
};

export default Testimonial;
