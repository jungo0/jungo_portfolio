import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  height: 100vh;
`;

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <Container>{children}</Container>;
}

export default Layout;
