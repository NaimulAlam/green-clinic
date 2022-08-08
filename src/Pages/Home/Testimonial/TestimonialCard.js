import React from "react";

const TestimonialCard = ({testimonial}) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{testimonial.review}</p>
      </div>
      <div class="grid grid-cols-2 px-10 pb-5">
        <div class="avatar">
          <div class="w-12 lg:w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
