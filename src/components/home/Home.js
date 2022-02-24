import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import Intro from "../intro/Intro";
import WelcomeSlider from "../welcomeSlider/WelcomeSlider";
import SideTabs from "../sideTabs/SideTabs";
import "./Home.css";

const Home = (props) => {
  if (props.user.loggedIn) {
    return (
      <Container>
        <SideTabs />
      </Container>
    );
  } else {
    return (
      <div>
        <Intro />
        <WelcomeSlider />
      </div>
    );
  }
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Home);
