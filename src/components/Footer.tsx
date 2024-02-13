import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface FooterProps {
  visible: boolean;
}

const FooterBar = styled.footer<FooterProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: rgb(255, 255, 255, 60%);
  z-index: 10;
  line-height: 45px;
  padding: 0 50px;
  transform: translateY(${(props) => (props.visible ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-size: 20px;
  }
`;
function Footer({ isMobileMenuOpen }: { isMobileMenuOpen: boolean }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const isVisible =
        scrollY + window.innerHeight >= document.body.scrollHeight - 70;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FooterBar visible={isVisible && !isMobileMenuOpen}>
      <Wrapper>
        <div className="copyright">Copyright 2024 jungo</div>
      </Wrapper>
    </FooterBar>
  );
}

export default Footer;
