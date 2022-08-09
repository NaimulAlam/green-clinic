import React from 'react';

const ServiceCard = (props) => {
  const { img, name, description } = props.service;
  return (
    <div className="card lg:w-80 bg-base-100 shadow-xl ">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{ name }</h2>
        <p>{ description }</p>
      </div>
    </div>
  );
};

export default ServiceCard;