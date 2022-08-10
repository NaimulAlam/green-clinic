import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const AvailableAppointments = ({ date, setDate }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  return (
    <div>
      <h1 className="text-xl text-center text-secondary">
        Available Appointments on: {format(date, "PP")}
      </h1>
      <div>
        {services.map((service) => {
          return (
            <div key={service.id}>
              <h2 className="text-xl text-center text-primary">
                {service.name}
              </h2>
              <p className="text-md text-center">{service.slots}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableAppointments;
