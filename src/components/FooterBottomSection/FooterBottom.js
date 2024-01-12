// FooterBottom.js
import React from "react";
import "./FooterBottomStyles.css";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LiaGoogle } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="icons">
        <FaFacebookF />
        <BsYoutube />
        <ImInstagram />
        <FaPinterest />
        <FaLinkedinIn />
        <LiaGoogle />
        <FaWhatsapp />
      </div>
      <div className="heading">Corporate Address:</div>
      <div className="paragraph">
        10 Upper Bank Street London, London E145GH United Kingdom
      </div>
      <div className="paragraph">Telephone: + 44 (0)20 3290 0046</div>
      <div className="paragraph">
        Copyright © 2001-2024 Projectsdeal. All rights reserved.
      </div>
    </div>
  );
};

export default FooterBottom;
