import React from "react";
import ServiceCard from "./ServiceCard";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";

const Service = () => {
  return (
    <div className="text-center mt-48">
      <h1 className="text-secondary font-bold text-4xl my-5">Our Services</h1>
      <h2 className="text-4xl lg:text-6xl mt-5 mb-24 lg:mb-48">Services We Provide</h2>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 gap-10 ">
        <ServiceCard cardTitle="Cavity" img={cavity} />
        <ServiceCard cardTitle="Fluride" img={fluoride} />
        <ServiceCard cardTitle="Whitening" img={whitening} />
      </div>
    </div>
  );
};

export default Service;
