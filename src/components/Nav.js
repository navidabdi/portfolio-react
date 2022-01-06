import react from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavBAckground>
      <StyledNav>
        <Link id="logo" to="/">
          Captuer
        </Link>
        <ul>
          <li>
            <Link to="/">1. About Us</Link>
          </li>
          <li>
            <Link to="/work">2. Our Work</Link>
          </li>
          <li>
            <Link to="/contact">3. Contact Us</Link>
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
`;

export default Nav;
