import React from "react";
import TestimonialCard from "./TestimonialCard";
import testimonialBG from "../../../assets/images/testimonial_bg.png";

const Testimonial = () => {
  const testimonials = [
    {
      _id: 1,
      name: "John Doe",
      city: "Bydgoszcz",
      review:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "https://placeimg.com/192/192/people",
    },
    {
      _id: 2,
      name: "Carolina Love",
      city: "Chattogram",
      review:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "https://placeimg.com/192/192/people",
    },
    {
      _id: 3,
      name: "Luke Smith",
      city: "New York",
      review:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua. Ut enim ad minim veniam.",
      img: "https://placeimg.com/192/192/people",
    },
  ];
  return (
    <div className="pl-2 md:pl-16 lg:py-20 py-5">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 md:px-10 justify-items-center">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial._id}
            testimonial={testimonial}
          ></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
