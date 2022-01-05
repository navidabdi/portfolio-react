import react from "react";
import styled from "styled-components";
import { StyleLayout } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem, ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            cumque, explicabo libero nesciunt.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How Is The Daily Schedule?</h4>
        <div className="answer">
          <p>Lorem, ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            cumque, explicabo libero nesciunt.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Diffrent Payment Metod?</h4>
        <div className="answer">
          <p>Lorem, ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            cumque, explicabo libero nesciunt.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Kind Of Products Do You Offer?</h4>
        <div className="answer">
          <p>Lorem, ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            cumque, explicabo libero nesciunt.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(StyleLayout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 1rem 0;
    width: 100%;
  }
  .question {
    padding: 1rem 0;
    cursor: pointer;
    h4 {
      font-size: 2rem;
    }
  }
  .answer {
    padding: 1rem 0;
    p {
      padding: 0.5rem 0;
    }
  }
`;

export default FaqSection;
