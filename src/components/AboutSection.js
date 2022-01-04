import react from "react";
import home1 from "../img/home1.png";
// Styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <AboutStyle>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>
            </h2>
          </div>
          <div className="hide">
            <h2>come true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography idea that you have, we
          have the best artist in the word that you cannot imagain.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="guy with a camera" />
      </div>
    </AboutStyle>
  );
};

// Styled Component
const AboutStyle = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;

  .description {
    flex: 1;
    padding-right: 5rem;
    h2 {
      font-weight: lighter;
    }
  }
  .image {
    flex: 1;
    overflow: hidden;
    img {
      width: 100%;
      height: 80vh;
      object-fit: cover;
    }
  }
  .hide {
    overflow: hidden;
  }
`;

export default AboutSection;
