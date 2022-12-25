import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const {pathname} = useLocation();
  return (
    <NavBAckground>
      <StyledNav>
        <Link id="logo" to="/">
          Captuer
        </Link>
        <ul>
          <li>
            <Link to="/">1. About Us</Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "45%" : "10%" }}
              className="line"
            ></motion.div>
          </li>
          <li>
            <Link to="/work">2. Our Work</Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/work" ? "45%" : "10%" }}
              className="line"
            ></motion.div>
          </li>
          <li>
            <Link to="/contact">3. Contact Us</Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contact" ? "45%" : "10%" }}
              className="line"
            ></motion.div>
          </li>
        </ul>
      </StyledNav>
    </NavBAckground>
  );
};
const NavBAckground = styled.div`
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
`;
const StyledNav = styled.nav`
  min-height: 10vh;
  width: 85%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  .line {
    height: 0.2rem;
    background: #23d997;
    /* width: 0%; */
    position: absolute;
    bottom: -50%;
    left: 60%;
  }
`;

export default Nav;
