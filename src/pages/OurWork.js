import react from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Import The OurWork Page Components

// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

// Animations
import { motion } from "framer-motion";
import {pageAnimation} from "../animation";

const OurWork = () => {
  return (
    <StyledWork variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <div className="movie">
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </div>
      <div className="movie">
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/theracer">
          <img src={theracer} alt="theracer" />
        </Link>
      </div>
      <div className="movie">
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </div>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  .movie {
    padding-bottom: 10rem;
    h2 {
      padding: 1rem 0;
    }
    .line {
      height: 0.5rem;
      background: #ccc;
      margin-bottom: 3rem;
    }
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
  }
`;

export default OurWork;
