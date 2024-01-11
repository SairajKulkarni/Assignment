import React from "react";
import "./FAQStyles.css";
import PressRecognition from "./PressRecognitionSection/PressRecognition";
import { FaWhatsapp } from "react-icons/fa";
import Question from "./QuestionSection/Question";

const FAQ = () => {
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-item">
        <h3>What do you need to start writing my dissertation?</h3>
        <p>
          In order to write your dissertation, we'll need the following:
          <br />
          1. Dissertation handbook, Proposal approved by university, ethics form
          <br />
          2. A full list of requirements, deadlines, and expectations of your
          work.
        </p>
      </div>

      <div className="faq-item">
        <h3>
          Can you <span className="faq-link">do my dissertation?</span>
        </h3>
        <p>
          Yes. Our experienced team can handle all aspects, including topic
          selection,{" "}
          <span className="faq-link">dissertation proposal help</span>, ethics
          forms, questionnaire, data collection, and analysis. We will conduct a
          thorough <span className="faq-link">literature review</span>, ensuring
          that the latest and most relevant references are incorporated into
          your dissertation. We carefully consider all your comments and
          requirements. With our years of expertise, our writers provide precise
          recommendations and conclusions to add value to your research field.
          Our aim is to provide you with a fully ready-for-submission
          dissertation that includes proper research and referencing to
          guarantee excellent grades.
        </p>
      </div>

      <div className="faq-item">
        <h3>How do I get reliable dissertation help services in the UK?</h3>
        <p>
          We maintain 100% confidentiality as we understand the importance of
          results to your life, to your career. The massive amount of
          expectations the supervisors and the university have of you are known
          to us. All our clients for the last 20 years are all students from
          PhD, Masters, and undergraduate. We conduct knowledge transfer
          sessions so you can also learn while you score! Your entire career,
          your entire life depends on your Scorecard. Hence we have multiple
          intermediate interactions to ensure all of us work as one team and
          progress together on your Essay, Coursework, Dissertation. So, please
          be assured!
        </p>
      </div>

      <PressRecognition />

      <div className="faq-item">
        <h3>
          Why is PROJECTSDEAL the popular choice and ranked as the best
          dissertation writing services in UK?
        </h3>
        <p>
          The very reason https://projectsdeal.co.uk is clearly Ranked No.1 on
          every single platform for over 20 years in a row is because we have a
          flawless trackrecord since 2001. We are the UK's first Dissertation
          and Coursework Writing Company. We are the Biggest team of over 600
          full time seasoned professionals like project coordination teams,
          Domain experts, Sophisticated academic Writers, Senior proof readers,
          and we are blessed with very very dependable and superior leadership.
        </p>
      </div>

      <div className="faq-item">
        <h3>
          Can someone write my dissertation if I do not have the project title?
        </h3>
        <p>
          We first have to define the precise research title for your research.
          Meaning we must start by narrowing down your exact area of research
          and consolidate that into a meaningful dissertation title. After that,
          you have to get it approved from your supervisor. Once the
          Dissertation title is approved, we can start with the Dissertation
          Proposal. The Dissertation Proposal must have a very clearly defined
          Aim of our research, followed by perfectly established research
          objectives we need to meet by the end of our research and clear
          Research Questions. We need the latest references from important
          journals and identify right authors to refer to. This is what we do;
          we continuously research and write Dissertations and Research papers,
          and hence we give you full leverage of our expertise. Please
          <span className="wp-button">
            <FaWhatsapp className="whatsapp-icon" />
            Whatsapp +44 7447882377
          </span>{" "}
          and we shall personally have a detailed discussion and help you more
          meaningfully.
        </p>
      </div>
      <div className="faq-item">
        <h3>Can you please brief me about the process?</h3>
        <p>
          Lets define the exact word count and the deadline. For your
          Dissertation we can help you define the title in your area of interest
          and start step by step to define the research proposal and take it
          forward chapter wise. Once we define the exact deliverable and the
          deadline. We shall offer you the professional fees for our help. After
          that we shall process your payment formalities and onboard you. You
          will have your unique project id along with your dedicated project
          coordinator. So we can progress step by step and work as one team all
          along. You can check the detailed process of{" "}
          <span className="faq-link">how we work</span>.
        </p>
      </div>
      <div className="faq-item">
        <h3>What qualifications do your dissertation writers have?</h3>
        <p>
          All of our writers come with a lot of experience in dissertation
          writing. They hold Master and Ph.D. degrees from reputed universities.
          They have published their own papers and possess extensive knowledge
          in all domains & degrees (Mangement, Marketing,{" "}
          <span className="faq-link">Nursing</span>,{" "}
          <span className="faq-link">Law, Undergrad</span>,{" "}
          <span className="faq-link">Masters</span>,{" "}
          <span className="faq-link"> PhD thesis writing service</span>). Their
          experienced writers enable them to write dissertations in a wide range
          of fields. Moreover, they're skilled at writing 100% academic
          dissertation, Since 2001.
        </p>
      </div>
      <div className="faq-item">
        <h3>Can I see some sample work?</h3>
        <p>
          Here are some Dissertation Examples <br />
          <span className="faq-link">Sample 1</span> |{" "}
          <span className="faq-link">Sample 2 </span>|{" "}
          <span className="faq-link">Sample 3</span>
        </p>
      </div>
      <Question />
      <div className="faq-item">
        <h3>How long is a dissertation?</h3>
        <p>
          An average dissertation has a word count between 7,000 to 20,000
          words. But different universities set different word limits for
          dissertation. So, be sure to check the word limit with your
          university.
        </p>
      </div>
      <div className="faq-item">
        <h3>What is the general dissertation structure?</h3>
        <p>
          Generally, <span className="faq-link">dissertation structure </span>in
          the UK includes the following: Title Page, Acknowledgment, Abstract,
          <span className="faq-link"> Introduction</span>, Literature Review,
          Aims and Objectives, Research Analysis,{" "}
          <span className="faq-link">Methodology</span>, Results Discussion
          Chapters, General Discussion, Conclusion and Contribution -
          Implications and Future Directions
        </p>
      </div>
      <div className="faq-item">
        <h3>Can I contact you at any time?</h3>
        <p>
          Yes. ProjectsDeal allocated a personal project manager as soon as the
          dissertation order is placed. Our team is available 24/7 in order to
          assist you whenever you need us. Feel free to email us or contact us
          via WhatsApp. Manager will be available till final successful
          submission.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
