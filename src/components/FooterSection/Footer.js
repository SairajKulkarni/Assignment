// Footer.js
import React from "react";
import backgroundImage from "../../images/footer-bg.png";
import "./FooterStyles.css";
import { FaHome } from "react-icons/fa";
import footerImage from "../../images/footer-image.png";
import { HiComputerDesktop } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100%",
      }}
    >
      <div className="footer-columns">
        {/* Column 1 */}
        <div className="column column-1">
          <h3>
            <FaHome className="home-icon" />
            About Us
          </h3>
          <p>
            Established in 2001, Projectsdeal was conceived with the vision to
            provide the{" "}
            <span className="boldthis">
              best dissertation writing services in the UK{" "}
            </span>
            through well-written dissertation, thesis, essay, research paper,
            term paper and book report, that will enable our clients secure a
            good career and make their parents proud.
          </p>
          <p>
            Thanks to your continued love and support, we have recently added
            134 new professional experts on board in addition to our current
            team.
          </p>
          <span className="link1">More about Projectsdeal</span>
        </div>

        {/* Column 2 */}
        <div className="column column-2">
          <h3>
            {" "}
            <HiComputerDesktop className="computer" />
            We are the Only Legitimate Dissertation Writing Service that is
            Trusted & Ranked on Inc, Safe to Order Online:
          </h3>
          <img src={footerImage} alt="Column 2 " />
          <p>
            <FaPhoneAlt className="phone-icon" />
            020 3290 0046
          </p>
          <p>CONTACT US</p>
        </div>

        {/* Column 3 */}
        <div className="column column-3">
          <h3>
            <FaComments className="comments" /> Dissertation Related Services
          </h3>
          <ul>
            <li>Dissertation Topics</li>
            <li>Do My Dissertation</li>
            <li>Dissertation Proposal Writing Service</li>
            <li>Literature Review Writing Service</li>
            <li>Masters Dissertation Writing Service</li>
            <li>PhD Dissertation Writing Service</li>
          </ul>
          <button>Calculate Dissertation Writing Cost</button>
        </div>

        {/* Column 4 */}
        <div className="column column-4">
          <h3>
            <FaListAlt className="list" />
            For Urgent Deadline
          </h3>
          <p>Whatsapp: +44 7447 882377</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
