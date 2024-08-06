import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { CiMail } from "react-icons/ci";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Information Technology Grad Student at Haldia Institute of
              Technology. I enjoy problem-solving and coding. Always strive to
              bring 100% to the work I do.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java and Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">Full Stack Web Development.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Ai related Technologies.</b>
              {/*  */}
              <br />
              <br />
              <div className="skills-section">
                <h3>Languages:</h3>
                <p className="purple">Java, JavaScript, HTML/CSS</p>
                <h3>Databases:</h3>
                <p className="purple">MySQL, MongoDB</p>
                <h3>Frameworks:</h3>
                <p className="purple">
                  React.js, Bootstrap, Firebase, Tailwind, Material UI,
                  Express.js, Node.js
                </p>
                <h3>Developer Tools:</h3>
                <p className="purple">
                  GitHub, VS Code, IntelliJ IDEA, Postman
                </p>
              </div>
              {/*  */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/samir9187"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/samirkunwar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:samirkunwar9187@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <CiMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/samirkunwar9187"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
