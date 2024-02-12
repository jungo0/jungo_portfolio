import React from "react";
import styled from "styled-components";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #2ecc71;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  scroll-snap-align: start;
`;

function Skills() {
  return <Container id="skills-section">Skills Content</Container>;
}

export default Skills;
