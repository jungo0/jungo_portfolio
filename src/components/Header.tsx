import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { FaSquareGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SiVelog } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";

interface HeaderProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
}

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeaderNavi = styled.header<HeaderProps>`
  position: fixed;
  width: 100%;
  top: -2%;
  margin-top: -9px;
  background-color: white;
  box-shadow: ${(props) =>
    props.isScrolled ? "0 2px  rgba(0, 0, 0, 1)" : "none"};
  border-bottom: ${(props) =>
    props.isScrolled ? "1px solid #1C1917" : "none"};
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) =>
    props.isScrolled
      ? props.isMobileMenuOpen
        ? "11px 0px 0px 0px"
        : "11px 0px 0px 0px"
      : "24px 0px 0px 0px"};
  height: ${(props) => (props.isMobileMenuOpen ? "100vh" : "auto")};
  transition: background-color 0.2s, box-shadow 0.2s, padding 0.2s, height 0.3s;
`;

const Logo = styled.div<{ isScrolled: boolean }>`
  font-size: 35px;
  font-weight: bold;
  margin-left: 60px;
  transition: font-size 0.3s;
  margin-top: -6px;

  ${(props) =>
    props.isScrolled &&
    css`
      margin-top: 10px;
      font-size: 30px;
    `}
`;
const Menu = styled.div<{
  isScrolled: boolean;
  isMobile: boolean;
  isMobileMenuOpen: boolean;
}>`
  display: ${(props) => (props.isMobile ? "none" : "flex")};
  position: sticky;
  left: 32%;
  opacity: ${(props) => (props.isMobileMenuOpen ? 0 : 1)};
  transition: opacity 0.3s ease;
  ${(props) =>
    props.isMobileMenuOpen
      ? css`
          opacity: 0;
          animation: ${fadeIn} 0.3s ease-out forwards;
        `
      : props.isMobile
      ? "none"
      : css`
          opacity: 1;
          animation: ${fadeIn} 0.3s ease-out forwards;
        `};

  &.fadeOut {
    opacity: 0;
  }

  ul {
    display: flex;
  }

  li {
    margin-left: 30px;
    line-height: -68px;
    margin-bottom: ${(props) => (props.isScrolled ? "-14px" : "0")};
    transition: margin-bottom 0.3s ease;

    & > a {
      padding: 0 20px;
      display: inline-block;
      color: #333;
      font-weight: 550;
      position: relative;

      &:hover {
        color: #3c67de;
      }
    }
  }
`;
const ButtonsWrapper = styled.div<{ isScrolled: boolean; isMobile: boolean }>`
  display: ${(props) => (props.isMobile ? "none" : "flex")};
  flex-direction: column;
  align-items: flex-end;
  border-width: 0px 0px ${(props) => (props.isScrolled ? "1px 2px" : "2px 2px")};
  border-style: ${(props) => (props.isScrolled ? "hidden" : "solid")};
  border-color: #1c1917;
  border-radius: ${(props) => (props.isScrolled ? "0" : "0 0 0 20px")};
  overflow: hidden;
  padding: ${(props) =>
    props.isScrolled ? "5px 16px 14px 20px" : "5px 15px 14px 20px"};
  position: relative;
  animation: ${fadeIn} 0.3s ease;
  top: ${(props) => (props.isScrolled ? "5px" : "0")};
  transition: top 0.3s ease, height 0.3s ease;

  @media (max-width: 1020px) {
    opacity: ${(props) => (props.isScrolled ? 0 : 1)};
  }
`;
const Buttons = styled.div<{ isScrolled: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: ${(props) => (props.isScrolled ? "-9px" : "15px")};
  transition: margin-top 0.3s ease;

  &::before {
    content: "About Me";
    font-size: 14px;
    margin-bottom: 12px;
    color: #3e3e3e;
    font-weight: bold;
    opacity: ${(props) => (props.isScrolled ? 0 : 1)};
    transition: opacity 0.3s ease;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  color: RGB(41, 41, 41);
  background-color: #d4d8d9;
  cursor: pointer;
  border: 0px solid #fff;
  border-radius: 5px;
  padding: 5px 7px;
  margin-right: 7px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s,
    transform 0.3s;

  &:hover {
    background-color: rgba(60, 103, 222, 0.9);
    color: #fff;
    border-color: #fff;
    transform: translateY(-1px);
  }
`;

const HamburgerMenu = styled(RxHamburgerMenu)`
  display: none;

  @media (max-width: 1020px) {
    display: block;
    font-size: 32px;
    cursor: pointer;
    text-align: center;
    margin-right: 30px;
    margin-bottom: 26px;
    margin-top: 26px;
    color: #3e3e3e;
    font-weight: 200;
    opacity: 1;
    transition: opacity 0.3s ease;

    &.fadeOut {
      opacity: 0;
    }

    &.fadeIn {
      opacity: 1;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: ${(props) => (props.isOpen ? "80px" : "0")};
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(60, 103, 222, 0.9);
  z-index: 10;
`;

const MobileMenuItem = styled(Link)`
  font-size: 24px;
  margin-bottom: 20px;
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #eee;
  }
`;
function Header() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1020);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setIsScrolled(scrollY > 0);
  };

  const handleHamburgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1020);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {!isMobileMenuOpen && (
        <HeaderNavi isScrolled={isScrolled} isMobileMenuOpen={isMobileMenuOpen}>
          <Logo isScrolled={isScrolled}>
            <Link to="/">Jungo's</Link>
          </Logo>
          <Menu
            isScrolled={isScrolled}
            isMobile={isMobile}
            isMobileMenuOpen={isMobileMenuOpen}
          >
            <ul>
              <li>
                <Link
                  to="/"
                  onClick={() => handleMenuClick("home-section")}
                  className={location === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Skills"
                  onClick={() => handleMenuClick("skills-section")}
                  className={location === "/Skills" ? "active" : ""}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/Project"
                  onClick={() => handleMenuClick("projects-section")}
                  className={location === "/Project" ? "active" : ""}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/etc"
                  onClick={() => handleMenuClick("contact-section")}
                  className={location === "/etc" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Menu>
          <ButtonsWrapper isScrolled={isScrolled} isMobile={isMobile}>
            <Buttons isScrolled={isScrolled}>
              <ButtonsContainer>
                <Button onClick={() => navigate("/git")}>
                  <FaSquareGithub />
                </Button>

                <Button onClick={() => navigate("/blog")}>
                  <SiVelog />
                </Button>
              </ButtonsContainer>
            </Buttons>
          </ButtonsWrapper>
          <HamburgerMenu onClick={handleHamburgerClick} />
        </HeaderNavi>
      )}
      {isMobileMenuOpen && (
        <MobileMenu isOpen={isMobileMenuOpen}>
          <CloseButton onClick={handleHamburgerClick}>&times;</CloseButton>
          <MobileMenuItem
            to="/"
            onClick={() => handleMenuClick("home-section")}
          >
            Home
          </MobileMenuItem>
          <MobileMenuItem
            to="/Skills"
            onClick={() => handleMenuClick("skills-section")}
          >
            Skills
          </MobileMenuItem>
          <MobileMenuItem
            to="/Project"
            onClick={() => handleMenuClick("projects-section")}
          >
            Projects
          </MobileMenuItem>
          <MobileMenuItem
            to="/etc"
            onClick={() => handleMenuClick("contact-section")}
          >
            Contact
          </MobileMenuItem>
        </MobileMenu>
      )}
    </>
  );
}
export default Header;
