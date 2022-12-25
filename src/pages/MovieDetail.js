import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../MovieState";

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  //   UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <StyledMovieDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="headline">
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </div>
          <div className="awards">
            {movie.awards.map((award) => (
              <Award key={award.title} title={award.title} description={award.description} />
            ))}
          </div>
          <div className="image-display">
            <img src={movie.secondaryImg} alt="" />
          </div>
        </StyledMovieDetails>
      )}
    </>
  );
};

const StyledMovieDetails = styled(motion.div)`
  color: white;
  .headline {
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
    }
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
  }
  .awards {
    min-height: 50vh;
    display: flex;
    margin: 3rem 10rem;
    justify-content: center;
    align-items: center;
    .award {
      padding: 3rem;
      h3 {
        font-size: 1.3rem;
      }
      .line {
        width: 60%;
        background: #23d997;
        height: 0.5rem;
        margin-top: 1rem;
      }
      p {
        font-size: 1rem;
        padding: 2rem 0;
      }
    }
  }
  .image-display {
    min-height: 50vh;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

// Award Component
const Award = ({ title, description }) => {
  return (
    <div className="award">
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </div>
  );
};

export default MovieDetail;
