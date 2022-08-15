import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";
import chairBg from "../../assets/images/bg.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${chairBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="hero min-h-screen"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="md:max-w-lg sm:min-w-lg rounded-lg"
            alt="Appointment chair"
          />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            {/* <p>You have selected : {format(date, "PP")}</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
