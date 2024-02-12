import React from "react";
import styled from "styled-components";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  scroll-snap-align: start;
`;

function Home() {
  return <Container id="home-section">Home Content</Container>;
}

export default Home;
