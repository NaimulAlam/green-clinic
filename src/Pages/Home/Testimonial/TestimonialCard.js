import React from "react";

const TestimonialCard = ({testimonial}) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{testimonial.review}</p>
      </div>
      <div className="grid grid-cols-2 px-10 pb-5">
        <div className="avatar">
          <div className="w-12 lg:w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={testimonial.img} alt="people" />
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold">{testimonial.name}</h2>
          <p>{testimonial.city}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
