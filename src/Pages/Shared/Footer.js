import React from "react";
import footerBG from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <section
      style={{
        background: `url(${footerBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <footer className="pt-10 px-2 text-base-content">
        <div className="footer md:justify-around md:pl-0 pl-12">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover" href="#1">
              Branding
            </a>
            <a className="link link-hover" href="#1">
              Design
            </a>
            <a className="link link-hover" href="#1">
              Marketing
            </a>
            <a className="link link-hover" href="#1">
              Advertisement
            </a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover" href="#2">
              About us
            </a>
            <a className="link link-hover" href="#2">
              Contact
            </a>
            <a className="link link-hover" href="#2">
              Jobs
            </a>
            <a className="link link-hover" href="#2">
              Press kit
            </a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover" href="#3">
              Terms of use
            </a>
            <a className="link link-hover" href="#3">
              Privacy policy
            </a>
            <a className="link link-hover" href="#3">
              Cookie policy
            </a>
          </div>
        </div>
        <div className="pt-10 pb-5 text-center grid-flow-col">
          <p>
            Copyright<span className="text-red-600"> &copy; NAiM </span>
            {new Date().getFullYear()} -All rights reserved
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
