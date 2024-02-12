import React from "react";
import styled from "styled-components";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #f39c12;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  scroll-snap-align: start;
`;

function Etc() {
  return <Container id="contact-section">Etc Content</Container>;
}

export default Etc;
