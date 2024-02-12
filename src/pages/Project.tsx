import React from "react";
import styled from "styled-components";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #e74c3c;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  scroll-snap-align: start;
`;

function Project() {
  return <Container id="projects-section">Project Content</Container>;
}

export default Project;
