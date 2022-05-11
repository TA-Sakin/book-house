import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark mt-5 pt-5 pb-4">
      <p className="text-center text-white">
        Book Store &copy; All rights reserved.
      </p>
      <div className="d-flex justify-content-center text-white">
        <p style={{ cursor: "pointer" }} className="mx-2 fs-5">
          <FaFacebook />
        </p>
        <p style={{ cursor: "pointer" }} className="mx-2 fs-5">
          <FaYoutube />
        </p>
        <p style={{ cursor: "pointer" }} className="mx-2 fs-5">
          <FaInstagram />
        </p>
        <p style={{ cursor: "pointer" }} className="mx-2 fs-5">
          <FaTwitter />
        </p>
      </div>
    </div>
  );
};

export default Footer;
