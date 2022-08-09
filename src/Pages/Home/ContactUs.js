import React from "react";
import apointmentBG from "../../assets/images/appointment.png";
import PrimaryBtn from "../Shared/PrimaryBtn";

const ContactUs = () => {
  return (
    <section
      style={{
        background: `url(${apointmentBG})`,
      }}
      className="text-center my-12"
    >
      <div className="px-5 py-10">
        <h3 className="text-xl text-primary uppercase font-bold">Contact Us</h3>
        <h3 className="text-3xl text-white">Stay connected with us</h3>
        <div className="flex justify-center">
          <div className="w-full md:w-96 py-12 space-y-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <input
                type="textarea"
                placeholder="Your Message"
                className="textarea textarea-bordered h-24 text-start"
              />
            </div>
            <div className="form-control mx-24 mt-6">
              <PrimaryBtn>Submit</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
