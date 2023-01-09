import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Info from "./Info/Info";
import MakeAppointment from "./MakeAppointment";
import Service from "./Service/Service";
import ServiceBanner from "./Service/ServiceBanner";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${require("../../assets/images/bg.png")})`,
          backgroundSize: "cover",
        }}
        className="min-h-screen">
        <h1>This is depricated for now</h1>
        <Banner />
        <Info />
      </div>
      <div className="min-h-screen mt-20">
        <Service />
        <ServiceBanner />
      </div>
      <MakeAppointment />
      <div className="md:min-h-screen">
        <Testimonial />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
