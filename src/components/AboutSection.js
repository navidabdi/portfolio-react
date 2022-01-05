import React from "react";
import home1 from "../img/home1.png";
import Wave from "./Wave";
// Styled
import styled from "styled-components";
import { StyleLayout } from "../styles.js";

// Frame Motion
import { motion } from "framer-motion";
import { titleAnimate, fade, photoAnimate } from "../animation";
const AboutSection = () => {

  return (
    <StyleLayout>
      <div className="description">
        <motion.div>
          <div className="hide">
            <motion.h2 variants={titleAnimate}>
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
        <motion.p variants={fade}>
          Contact us for any photography or videography idea that you have, we
          have the best artist in the word that you cannot imagain.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </div>
      <div className="image">
        <motion.img variants={photoAnimate}  initial="hidden" animate="show" src={home1} alt="guy with a camera" />
      </div>
      <Wave />
    </StyleLayout>
  );
};

export default AboutSection;
