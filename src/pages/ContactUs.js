import React from "react";

// Import The ContactUs Page Components

// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimate } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="title">
        <div className="hide">
          <motion.h2 variants={titleAnimate}>Get In Touch.</motion.h2>
        </div>
      </div>
      <div className="hide">
        <motion.div variants={titleAnimate} className="social-link">
          <div className="circle"></div>
          <h2>Send Us A Message</h2>
        </motion.div>
      </div>

      <div className="hide">
        <motion.div variants={titleAnimate} className="social-link">
          <div className="circle"></div>
          <h2>Send An Email</h2>
        </motion.div>
      </div>

      <div className="hide">
        <motion.div variants={titleAnimate} className="social-link">
          <div className="circle"></div>
          <h2>Social Medias</h2>
        </motion.div>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: white;
  min-height: 90vh;
  .title {
    margin-bottom: 3rem;
  }
  .hide {
    overflow: hidden;
  }
  .social-link {
    display: flex;
    align-items: center;
    h2 {
      margin: 1rem;
      font-size: 2rem;
    }
  }
  .circle {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background: #23d997;
  }
`;
export default ContactUs;
