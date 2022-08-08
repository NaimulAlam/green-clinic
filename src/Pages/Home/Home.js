import React from "react";
import Banner from "./Banner";
import Info from "./Info/Info";
import Service from "./Service/Service";
import ServiceBanner from "./Service/ServiceBanner";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="">
      <div className="min-h-screen bg-home-background">
        <Banner />
        <Info />
      </div>
      <div className="min-h-screen mt-20">
        <Service />
        <ServiceBanner />
      </div>
      <div className="min-h-screen mt-20">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
