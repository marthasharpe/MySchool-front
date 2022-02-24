import React from "react";
import { Row, Jumbotron } from "react-bootstrap";
import icon from "assets/BrainSorterLogo.png";
import "./Intro.css";

const Intro = () => {
  return (
    <Jumbotron id="jumbotron">
      <Row className="justify-content-center">
        <img src={icon} width="250" height="250" alt="BrainSortIntro" />
      </Row>
    </Jumbotron>
  );
};

export default Intro;
