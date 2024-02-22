import React, { useState, useEffect } from "react";
import styled from "styled-components";
import background from "../img/background2.png";

interface FooterProps {
  visible: boolean;
  hasBackground: boolean;
}

const FooterBar = styled.footer<FooterProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  font-family: "Pretendard_Regular";
  background-image: ${(props) =>
    props.hasBackground ? `url(${background})` : "none"};
  background-size: cover;
  background-color: ${(props) =>
    props.hasBackground ? "rgba(255, 255, 255, 0.6)" : "transparent"};
  z-index: 10;
  padding-top: 80px;
  padding-left: 60px;
  transform: translateY(${(props) => (props.visible ? "0" : "100%")});
  transition: transform 0.3s ease-in, transform 0.2s ease-out;
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
  const [hasBackground, setHasBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const isVisible =
        scrollY + window.innerHeight >= document.body.scrollHeight - 15;

      setIsVisible(isVisible);

      if (isVisible) {
        setHasBackground(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FooterBar
      visible={isVisible && !isMobileMenuOpen}
      hasBackground={hasBackground}
    >
      <Wrapper>
        <div className="copyright">Copyright 2024 jungo</div>
      </Wrapper>
    </FooterBar>
  );
}

export default Footer;
