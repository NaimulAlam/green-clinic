import React from "react";

const TestimonialCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div class="card w-96 md:w-56 lg:w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      <div class="flex justify-evenly py-5">
        <div class="avatar">
          <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" alt="people" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold">Jhone Doe</h2>
          <p>Bydgoszcz</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
