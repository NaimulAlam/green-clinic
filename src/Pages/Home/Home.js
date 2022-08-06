import React from "react";
import Banner from "./Banner";
import Info from "./Info/Info";
import Service from "./Service/Service";
import ServiceBanner from "./Service/ServiceBanner";

const Home = () => {
  return (
    <div className="bg-home-background">
      <div className="min-h-screen">
        <Banner />
        <Info />
      </div>
      <div className="min-h-screen mt-20">
        <Service />
        <ServiceBanner />
      </div>
    </div>
  );
};

export default Home;
