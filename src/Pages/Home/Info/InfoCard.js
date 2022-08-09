import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div
      className={`lg:h-40 card lg:card-side py-10 bg-base-100 shadow-xl ${bgClass}`}
    >
      <figure className="lg:pl-5">
        <img src={img} alt="marker" />
      </figure>
      <div className="card-body items-center text-center text-white md:mt-[-1.5rem]">
        <h2 className="card-title text-md">{cardTitle}</h2>
        <p className="md:text-sm text-sm">
          Click the button to watch on Jetflix app.
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
