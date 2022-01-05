import react from "react";
import home1 from "../img/home1.png";
// Styled
import styled from "styled-components";
import { StyleLayout } from "../styles.js";

// Frame Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnimate = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
  };

  return (
    <StyleLayout>
      <div className="description">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <div className="hide">
            <motion.h2 variants={titleAnimate} initial="hidden" animate="show">
              We work to make
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnimate}>
              your <span>dreams</span>
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnimate}>come true.</motion.h2>
          </div>
        </motion.div>
        <p>
          Contact us for any photography or videography idea that you have, we
          have the best artist in the word that you cannot imagain.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="guy with a camera" />
      </div>
    </StyleLayout>
  );
};

export default AboutSection;
