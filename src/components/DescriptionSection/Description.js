// OrderComponent.js
import "./DescriptionStyles.css";
import React from "react";
import orderNow from "../../images/order-now.png";

const Description = () => {
  return (
    <div className="order-container">
      <p className="order-text">
        We specialise in Essays, Assignments, Courseworks, Online exams, and
        Dissertation Writing Services, Since 2001!
      </p>
      <p className="order-description">
        We have literally delivered success and helped thousands of anxious and
        vulnerable students, many many of your senior and super seniors peers,
        with Assignments, Coursework, Online exams, and Dissertations. We
        understand and appreciate the challenges you face in juggling your job,
        studies, family, your ugly and demanding supervisor, and we feel
        responsible that your career and literally your life depends on your
        Results. We have delivered success, Since 2001, So now it's effortless
        to deliver exactly what your supervisor is looking for. If you study in
        UK, you can please focus on your other important priorities while we
        look after your academic success.{" "}
        <span style={{ fontStyle: "italic" }}>Effortlessly!</span>
      </p>
      <p className="order-button-heading">
        Just Sit Back Relax & Consider Your Work Done!!
      </p>
      <button className="order-button">
        <img src={orderNow} alt="Order Now" className="order-image" />
      </button>
    </div>
  );
};

export default Description;
