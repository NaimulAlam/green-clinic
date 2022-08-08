import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className={`lg:h-40 card lg:card-side py-10 bg-base-100 shadow-xl ${bgClass}`}>
      <figure className="lg:pl-5">
        <img src={img} alt="marker" />
      </figure>
      <div className="card-body text-white md:pt-10 md:pb-2">
        <h2 className="card-title">{cardTitle}</h2>
        <p className="md:text-sm text-sm">Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
