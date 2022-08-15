import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import TreatmentCard from "./TreatmentCard";

const AvailableAppointments = ({ date, setDate }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  return (
    <div>
      <h1 className="text-xl text-center text-secondary py-10">
        Available Appointments on: {format(date, "PP")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mx-5">
        {services.map((service) => (
          <TreatmentCard
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment} />}
    </div>
  );
};

export default AvailableAppointments;
