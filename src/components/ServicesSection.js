import react from "react";
import home2 from "../img/home2.png";

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import styled from "styled-components";
import { StyleLayout } from "../styles.js";

const ServicesSection = () => {
  return (
    <Services>
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="camera" />
      </div>
    </Services>
  );
};

const Services = styled(StyleLayout)`
  h2{
    padding-bottom: 4rem;
  }
  p{
    font-size: 1.1rem;
    width: 70%;
    padding: 1.5rem 0 4rem 0;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    
  }
  .card {
    flex: 1 1 50%;
    .icon {
      display: flex;
      align-items: center;
      h3 {
        margin-left: 1rem;
        background: white;
        color: #1b1b1b;
        padding: .4rem;
      }
    }
  }
`;

export default ServicesSection;
