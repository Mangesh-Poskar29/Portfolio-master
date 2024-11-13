import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vrundavan from "../../Assets/Projects/vrundavan.png";
import psfms from "../../Assets/Projects/psfms.png";
import schoolMate from "../../Assets/Projects/schoolmate.png";
import lbs from "../../Assets/Projects/lb.png";
import BMS from "../../Assets/Projects/BMS.png";
import vruhome from "../../Assets/Projects/VrundavanH.png";

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
        <h2 style={{ color: "white" }}>
          <strong className="purple">Java Full Stack</strong> Projects
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={schoolMate}
            isBlog={false}
            title="SchoolMATE"
            description="Dynamic web application which is sponsored by Z.P School Guhagar No.1 crafted with ReactJS, NodeJS, SpringBoot, and MongoDB. Enjoy real-time school management, intuitive dashboards, task automation, and secure resource handling. Centralized event calendars, seamless communication, and scalable architecture make SchoolMATE the go-to solution for modern education administration. Elevate your school's digital experience with innovation and efficiency. "
            demoLink="https://jeevan-shikshan-school.netlify.app/"
            ghLink="https://github.com/Mangesh-Poskar29/SchoolMate"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={vruhome}
            isBlog={false}
            title="Vrundavan Home Stay"
            description="Dynamic web management application sponsored by Vrundavan Hotel, crafted with ReactJS, NodeJS, Spring Boot, and MySQL. Enjoy real-time hotel management, intuitive dashboards, room booking, and secure resource handling. Elevate guest experiences with streamlined operations and seamless, user-friendly interactions."
            demoLink="https://vrundavan-hotel-guhagar.netlify.app/"
            ghLink="https://github.com/Mangesh-Poskar29/Vrundavan-hotel-demo-client-main"
          />
        </Col>
        <h2 style={{ color: "white" }}>
          <strong className="purple">Java </strong> Projects
        </h2>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lbs}
              isBlog={false}
              title="Library Management System"
              description="Library Management System is your go-to Library Management System, seamlessly powered by Java for efficient book management. With a user-friendly command line interface, It simplifies transactions and enriches member experiences, effortlessly execute book transactions, track due dates, and receive automated reminders, ensuring a secure and connected library administration experience."
              ghLink="https://github.com/Mangesh-Poskar29/Library-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BMS}
              isBlog={false}
              title="Bank Management System"
              description="The Bank Management System (BMS) is a comprehensive solution designed to manage and streamline the operations of a bank. With the increasing reliance on technology in the banking sector, such systems ensure efficiency, accuracy, and security in handling various banking activities."
              ghLink="https://github.com/Mangesh-Poskar29/BankMS"
            />
          </Col>

          <h2 style={{ color: "white" }}>
            <strong className="purple">Design </strong> Projects
          </h2>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vrundavan}
              isBlog={false}
              title="B2B Ecom"
              description="A robust B2B e-commerce platform inspired by IndiaMart, designed to connect suppliers and buyers for streamlined business transactions. Built with a focus on scalability and ease of use, it offers extensive product listings, secure communication channels, and detailed seller profiles. The platform enables businesses to negotiate deals, manage orders, and track shipments seamlessly. Empower your business growth with an all-in-one solution for wholesale and bulk purchases."
              ghLink="https://github.com/Mangesh-Poskar29/b2b-ecomm"
              demoLink="https://b2b-mart.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vrundavan}
              isBlog={false}
              title="Vrundavan Hotel"
              description=" Vrundavan Hotel Website — a captivating frontend project showcasing my skills in HTML, CSS, and JavaScript. Sponsored by Vrundavan Hotel in the picturesque Guhagar, this project reflects my ability to create visually appealing and user-friendly interfaces. The website features a responsive design, interactive elements powered by JavaScript, and a seamless user experience, providing a virtual gateway to the hospitality of Vrundavan Hotel."
              ghLink="https://github.com/Mangesh-Poskar29/Vrundavan"
              demoLink="https://vrundavan-hotel.netlify.app/"
            />
          </Col>

          <h2 style={{ color: "white" }}>
            <strong className="purple">MERN </strong> Projects
          </h2>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={psfms}
              isBlog={false}
              title="PSFMS"
              description="Primary School Facility Management Sponsored by Z.P School Velneshwar No.1. It is ultimate MERN Stack-powered solution for primary schools. Effortlessly manage facility reservations, maintenance, resource allocation, and emergency response. Manages facilities provided by Z.P Government. With a scalable design and comprehensive analytics, it ensures a seamless and innovative approach to primary school facility management."
              demoLink="https://psfmsvelneshwar.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
