// Advice.js
import React from "react";
import "./AdviceStyles.css";
import pricingImage from "../../images/pricing.png";

const Advice = () => {
  return (
    <div className="advice-container">
      <h2>
        Why Students should take advice from Top Dissertation Writing Services?
      </h2>

      <div className="advice-content">
        <div className="advice-video">
          <iframe
            src="https://www.youtube.com/embed/PPFFr51UkS8?si=bkhIN0Fic7OhkdnS"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="advice-sections">
          <div className="advice-item">
            <h3>Right Topic Selection Advice:</h3>
            <p>
              Projectsdeal will give you viable topics that won't make you hit a
              roadblock. We recommend the latest dissertation topics that are
              interesting, with a lot of research and contribution scope.
            </p>
          </div>

          <div className="advice-item">
            <h3>More Access to the Library and Research Data Advice:</h3>
            <p>
              We have more access to the library than you will ever get, thus
              enabling us to get more primary and secondary research material
              than you.
            </p>
          </div>

          <div className="advice-item">
            <h3>Years of Experience and Expert Domain Writers Advice:</h3>
            <p>
              Our writers have more experience than you because they have
              written so many dissertations for several individuals, and this
              goes on every year. We can easily help you score your desired
              grades.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-advice">
        <p>
          You can calculate custom cost online and order online. Within 15
          minutes, a personal project manager would be assigned, experienced
          dissertation writers will start your work. The allocated manager shall
          stay in touch with you on WhatsApp until the final successful
          submission.
        </p>
      </div>

      <div className="pricing-section">
        <h1 className="bottom-heading">
          Just Sit Back, Relax & Consider Your Work Done!!
        </h1>
        <div className="see-pricing">
          <img src={pricingImage} alt="See Pricing" />
        </div>
      </div>
    </div>
  );
};

export default Advice;
