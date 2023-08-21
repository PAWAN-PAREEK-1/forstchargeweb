import React, { useState } from "react";
import "../Style/Faqs.css";
import faqhero from "../Assets/img/faqhero.svg";
import faq1 from "../Assets/img/faq1.svg";
import faq2 from "../Assets/img/faq2.svg";
import faq3 from "../Assets/img/faq3.svg";
import faq4 from "../Assets/img/faq4.svg";
import plus from "../Assets/img/plus.svg";
import minus from "../Assets/img/minus.svg";

const Faqs = () => {
  const [faqData, setFaqData] = useState([
    { question: "Question 1", answer: "An electric vehicle (EV) is a type of automobile that is powered by one or more electric motors, which use electricity stored.", img: faq1, expanded: true },
    { question: "Question 2", answer: "An electric vehicle (EV) is a type of automobile that is powered by one or more electric motors, which use electricity stored.", img: faq2, expanded: false },
    { question: "Question 3", answer: "An electric vehicle (EV) is a type of automobile that is powered by one or more electric motors, which use electricity stored.", img: faq3, expanded: false },
    { question: "Question 4", answer: "AAn electric vehicle (EV) is a type of automobile that is powered by one or more electric motors, which use electricity stored.", img: faq4, expanded: false },
  ]);
  const handleQuestionClick = (index) => {
    const updatedFaqData = faqData.map((faq, i) => ({
      ...faq,
      expanded: i === index ? !faq.expanded : false,
    }));
    setFaqData(updatedFaqData);
  };

  return (
    <div className="Faqs">
      <div className="faq-container">
        <div className="faq-img">
          <img src={faqhero} alt="Your Image" />
        </div>
        <div className="faq-question">
          <h2>Why the Automotive Future is Electric</h2>
          <p>
            An electric vehicle (EV) is a type of automobile that is powered by
            one or more electric motors, which use electricity stored in
            batteries for propulsion.
          </p>

          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-question ${faq.expanded ? "expanded" : ""}`}
              onClick={() => handleQuestionClick(index)}
            >
              <div className="qa">
                <div className="faq-qa">
                  <img src={faq.img} alt="" />
                  <h3 className="question">{faq.question}</h3>
                </div>
                {faq.expanded ? (
                  <img id="mn" src={minus} alt="Minus" />
                ) : (
                  <img  id="mn"src={plus} alt="Plus" />
                )}
              </div> 
              {faq.expanded && <p className="answer">{faq.answer}</p>}
              <hr id="qa" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;