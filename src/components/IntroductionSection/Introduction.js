// Introduction.js

import React from "react";
import "./IntroductionStyles.css";
import logo1 from "../../images/review -1.png";
import logo2 from "../../images/review - 2.png";
import logo3 from "../../images/review - 3.png";
import logo4 from "../../images/review - 4.png";
import logo5 from "../../images/review - 5.png";
import logo6 from "../../images/review - 6.png";

const Introduction = () => {
  return (
    <div className="introduction-container">
      <h2>Dissertation Writing Services UK</h2>
      <p>
        Projectsdeal is the UK's only dissertation writing service that is
        consistently awarded the title of "No.1 Dissertation Writing Service" by
        every major public review platform, including Google, TrustPilot,
        Sitejabber, Yell, and Yelp, with all reviews receiving a perfect 5-star
        rating. The rationale behind this achievement is simple: We Deliver! We
        go to the extreme ends to ensure our Clients are Happy and Super
        Successful. And that's Non-Negotiable for us.
      </p>
      <p>
        We have been, we are, and we will always be the Most Loved & Trusted
        Dissertation Writing Service in the UK. We are proud, & you will be too!
        We are proud of our achievements & flawless track record. Please read
        our reviews:
      </p>
      <div className="logo-container">
        {/* Replace the src attribute with the actual image paths */}
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
        <img src={logo5} alt="Logo 5" />
        <img src={logo6} alt="Logo 6" />
      </div>
    </div>
  );
};

export default Introduction;
