import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mangesh Poskar</span>{" "}
            from
            <span className="purple"> Guhagar, Maharashtra.</span>
            <br />
            I am a passionate Software Developer and MERN Stack Developer with a
            strong foundation in computer engineering.
            <br />
            I recently completed my B.E. in Computer Engineering with a CGPA of
            8.94, having previously earned a diploma from Sahyadri Polytechnic
            Sawarde.
            <br />
            Currently, I am pursuing an MBA in IT to further enhance my skills,
            broaden my understanding of management, and cultivate leadership
            abilities that complement my technical expertise.
            <br />
            <br />
            Beyond coding, here are a few other activities that I love to dive
            into:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing E-Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
