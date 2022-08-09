import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Appointment Banner"
          />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            <p>You have selected : {format(date, "PP")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
