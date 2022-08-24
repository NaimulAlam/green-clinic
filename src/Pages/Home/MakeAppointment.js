import React from "react";
import doctor from "../../assets/images/doctor.png";
import apointmentBG from "../../assets/images/appointment.png";
import PrimaryBtn from "../Shared/PrimaryBtn";
import { Link } from "react-router-dom";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${apointmentBG})`,
      }}
      className="flex justify-center items-center my-12"
    >
      <div className="flex-1 md:visible invisible">
        <img
          className="md:mt-[-100px] lg:mt-[-150px]"
          src={doctor}
          alt="doctor"
        />
      </div>
      <div className="md:flex-1 px-5 py-10">
        <h3 className="text-xl text-primary uppercase font-bold">Apointment</h3>
        <h3 className="text-3xl text-white">Make An Appointment Today</h3>
        <p className="text-white py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          consequatur nisi obcaecati magnam maxime blanditiis, commodi aliquam
          necessitatibus. Corrupti quia ratione fuga quas, maiores et natus
          minus praesentium molestiae nemo.
        </p>
        <Link to="appointment">
          <PrimaryBtn>Book Now</PrimaryBtn>
        </Link>
      </div>
    </section>
  );
};

export default MakeAppointment;
