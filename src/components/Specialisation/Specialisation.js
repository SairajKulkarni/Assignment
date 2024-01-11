// Specialisation.js

import React from "react";
import "./SpecialisationStyles.css";
import { FaWhatsapp } from "react-icons/fa";

const Specialisation = () => {
  return (
    <div className="projectsdeal-info-container">
      <div className="projectsdeal-info-text">
        <p>
          Projectsdeal is the{" "}
          <span className="highlightText">
            best dissertation writing services in the UK
          </span>
          , with all 5-star reviews. Our team of experienced British writers
          will craft your dissertation with a research-oriented approach,
          ensuring exceptional quality. Our dissertation writers will diligently
          work on your dissertation, making it engaging and captivating,
          ultimately helping you score distinction. Projectsdeal has years of
          experience in the industry, making it one of the top dissertation
          writing services in the UK. All of our dissertation helpers are
          veteran writers and research experts with several years of expertise.
          We are hailed as the best dissertation help for providing PhD thesis,
          assignments, and essay writing.
        </p>
      </div>

      <div className="projectsdeal-info-wrapper">
        <div className="projectsdeal-info-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YVbMIIdpvWQ?si=DacNknE3CT89joF_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div className="projectsdeal-info-list">
          <ul>
            <li>✔ Established 2001</li>
            <li>✔ 24 Years of Successful Track Record</li>
            <li>✔ PhD Qualified Writers</li>
            <li>✔ Top Notch Quality</li>
            <li>✔ Enjoy Full Confidentiality</li>
            <li>✔ Plagiarism Free</li>
            <li>✔ Free Unlimited Revisions</li>
            <li>✔ Professional Project Management</li>
            <li>✔ 5 star Reviews on Google, SiteJabber, TrustPilot</li>
            <li>✔ 600+ Domain Experts</li>
            <li>✔ 46 Project Coordinators</li>
            <li>✔ Guaranteed Grades</li>
          </ul>
        </div>
      </div>
      <div className="contact">
        <h2>For Urgent Deadlines WhatsApp us</h2>
        <button className="whatsapp-button">
          <FaWhatsapp className="whatsapp-icon" />
          Whatsapp +44 7447882377
        </button>
      </div>
      <div className="bottom-description">
        <p>
          When it comes to hiring Best Dissertation Writing Service in London
          trust becomes one of the major concerns for students. Students have
          many concerns regarding the methodology, deadlines, quality of work,
          pricing, experience of the British writers, plagiarism, and revisions
          or amendments etc. We are so good that the results of our works speak
          for themselves as more than 82% of our clients have bagged for
          themselves Merits and Distinctions. Balancing your odd Job, other imp
          priorities and Score!
        </p>
        <p>
          A dissertation determines your overall grade and can either help your
          academic career or break it. It requires investing time, energy,
          motivation and skills such as research skills in order to do a great
          job. However, to ensure that your dissertation is not only accepted
          but also wins you a great grade and high regard, you must present an
          original dissertation that fulfills the objectives it has indicated.
          It should be well-researched, coherent and a demonstration of
          knowledge applied in solving a real life situation effectively.
        </p>
      </div>
    </div>
  );
};

export default Specialisation;
