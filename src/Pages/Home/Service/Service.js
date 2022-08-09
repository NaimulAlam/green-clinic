import React from "react";
import ServiceCard from "./ServiceCard";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";

const Service = () => {
  const services = [
    {
      _id: 1,
      name: 'Fluoride Treatment',
      description: 'lorem ipsum dolor sit amet',
      img: fluoride,
    },
    {
      _id: 2,
      name: 'Cavity Filling',
      description: 'loreum ipsum dolor sit amet',
      img: cavity,
    },
    {
      _id: 3,
      name: 'Teath Whitening',
      description: 'loreum ipsum dolor sit amet',
      img: whitening,
    },
  ]
  return (
    <div className="text-center my-24">
      <h1 className="text-secondary font-bold text-4xl my-5 uppercase">
        Our Services
      </h1>
      <h2 className="text-4xl lg:text-6xl mt-5 mb-24 lg:mb-48">
        Services We Provide
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 justify-items-center">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
        {/* <ServiceCard cardTitle="Cavity" img={cavity} />
        <ServiceCard cardTitle="Fluride" img={fluoride} />
        <ServiceCard cardTitle="Whitening" img={whitening} /> */}
      </div>
    </div>
  );
};

export default Service;
