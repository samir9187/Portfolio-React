import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/blog.png";
import newswebapp from "../../Assets/Projects/newswebapp.avif";
import ecommerce from "../../Assets/Projects/ecommerce.avif";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Full Stack Blog App"
              description="The Full Stack Blog Application is a comprehensive platform that allows users to create, view, edit, and delete blog posts. Built with React for the frontend and Node.js with Express for the backend, this application offers a dynamic and responsive user experience. Users can register and log in to manage their posts securely, with rich text editing capabilities for content creation. MongoDB serves as the database for efficient data storage, and Cloudinary is integrated for handling cover image uploads. The application also features React Speech Recognition to enable voice-based search functionality, enhancing user interaction. The system ensures secure authentication, allowing only authorized users to perform post operations, and provides real-time updates for a seamless blogging experience."
              ghLink="https://github.com/samir9187/Blog"
              demoLink="https://blog-script-2000.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newswebapp}
              isBlog={false}
              title="Daily News App"
              description="The Daily News App is designed to deliver the latest news articles from various sources. Developed using HTML, CSS (Bootstrap), and JavaScript, the application features a user-friendly interface with options for customizing news feeds. Firebase Authentication is utilized for secure user registration and login, while Firebase Realtime Database handles data storage and retrieval, ensuring real-time updates and personalized content. The app includes search functionality and predefined categories, allowing users to navigate and bookmark articles efficiently. This project showcases a clean, responsive design and effective integration of Firebase for robust user and data management."
              ghLink="https://github.com/samir9187/NewsApp"
              demoLink="https://github.com/samir9187/NewsApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Website:"
              description="Developed a fully functional e-commerce website using modern web technologies including HTML, CSS, and JavaScript. Integrated Firebase Firestore to efficiently store and manage product data, user information, and order details. Implemented robust user authentication and authorization features to ensure secure login and registration processes. The website includes a comprehensive shopping cart feature, allowing users to add products to their cart, view cart contents, and proceed to checkout seamlessly. Designed responsive user interfaces to provide a consistent and user-friendly browsing experience across various devices. Utilized GitHub for version control and collaboration, ensuring smooth development and deployment.

"
              ghLink="https://github.com/samir9187/E-Commerce-Website"
              demoLink="https://samir9187.github.io/E-Commerce-Website/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
