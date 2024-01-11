import React from "react";
import "./WritingSolutionStyles.css";
import learnMore from "../../images/learn-more.png";

const WritingSolutions = () => {
  return (
    <div className="dissertation-writing-section">
      <h2>
        How to Consistently Achieve Merits and Distinctions in Dissertations?
      </h2>

      <div className="dissertation-body">
        <p>
          To produce such a dissertation and get high marks for it, you need to
          know how a dissertation is evaluated so that you can tailor it for a
          great evaluation. While these evaluations differ among different
          departments or universities the criteria is pretty much the same and
          may include the following:
        </p>

        <ul>
          <li>
            {" "}
            Emphasis is mainly placed on the skill with which you have used the
            research methods to obtain scientifically presented findings as well
            as masterfully draw conclusions from these results.
          </li>
          <li>Originality and relevance of the dissertation</li>
          <li>
            The dissertation should be original and relevant as well as
            demonstrate your ability to thoroughly conduct a research study.
          </li>
          <li>
            Your literature review should be relevant and very specific to your
            topic instead of an account of general information related to your
            field of study. The review should be both descriptive and critically
            analyze previous works while explicitly showing how his research
            methodology and the review are linked.
          </li>
          <li>
            The dissertation you present should have the research methodology
            appropriate and justified. You should minimize the likelihood of
            bias and limitations.
          </li>
          <li>
            The findings from your research should answer your research
            questions as well as meet your objectives. There should be no doubt
            as to the testing of your hypotheses.
          </li>
          <li>
            Your results should be well presented such that the patterns can be
            clearly identified and have been summarized.
          </li>
          <li>
            In your discussion, make a point of analyzing the main points first
            and speculations or reconceptualization should be well-founded in
            the results presented as well as linked to literature. Results
            should be interpreted exhaustively and innovatively related to the
            research hypothesis.
          </li>
          <li>
            The reference list should give a complete and accurate account of
            sources used in the dissertation.
          </li>
          <li>
            Finally, there should be some recommendations for future studies.
          </li>
          <li>
            Once the evaluation is done by supervisors and advisors who propose
            a grade that is either confirmed or rejected by a board of
            examiners, the final grade is given.
          </li>
        </ul>

        <h3>How We Make Dissertation Writing Easier!</h3>

        <p>
          With our dissertation writing help, we make writing your dissertation
          easier. We put our wealth of experience into use and make us a
          reliable and accurate dissertation help and writing services. We
          guarantee you the best through our time-proven research and thesis
          writing service. We are your go-to dissertation writing help provider,
          ensuring that your dissertation meets your university specifications.
          Our experience spans across all major universities in the UK, where we
          have consistently delivered exceptional results with all 5-star
          reviews on all platforms. With our expertise, we are committed to
          providing the highest quality dissertation assistance to students from
          all academic backgrounds.
        </p>
      </div>
      <div className="button-div">
        <h2>
          Simply relieve yourself from your dissertation worries in just 1 step:
        </h2>
        <img
          src={learnMore}
          alt="Relieve Dissertation Worries"
          className="dissertation-button"
        />
      </div>
    </div>
  );
};

export default WritingSolutions;
