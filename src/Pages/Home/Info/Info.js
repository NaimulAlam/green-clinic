import React from 'react';
import InfoCard from './InfoCard';
import marker from '../../../assets/icons/marker.svg'
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-12">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      />
      <InfoCard cardTitle="Our Locations" bgClass="bg-accent" img={marker} />
      <InfoCard
        cardTitle="Contact Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      />
    </div>
  );
};

export default Info;