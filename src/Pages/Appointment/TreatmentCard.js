import React from "react";

const TreatmentCard = ({ service, setTreatment }) => {
  const { name, slots } = service;

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try Another Date</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces " : "space "}
          available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
          >
            Book Apointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
