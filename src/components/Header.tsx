import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { FaSquareGithub } from "react-icons/fa6";
import { SiVelog } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowCircleRight } from "react-icons/fa";
interface HeaderProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
}

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

const HamburgerMenu = styled(RxHamburgerMenu)<{ isScrolled: boolean }>`
  display: none;

  @media (max-width: 1020px) {
    display: block;
    font-size: 30px;
    cursor: pointer;
    text-align: center;
    margin-right: 30px;
    margin-bottom: ${(props) => (props.isScrolled ? "8px" : "26px")};
    margin-top: ${(props) => (props.isScrolled ? "24px" : "26px")};
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
  top: 15px;
  right: 36px;
  font-size: 50px;
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
  align-items: left;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2454d9;
  z-index: 10;
  animation: ${fadeIn} 0.5s ease;
`;

const MobileMenuItem = styled(Link)`
  font-size: 24px;
  margin-top: 50px;
  text-decoration: none;
  color: #fff;
  position: relative;
  padding: 0 5%;
  width: 90%;
  padding-top: 60px;
  box-sizing: border-box;

  &:not(:last-child)::after {
    content: "";
    display: block;
    width: 100%;
    height: 1.5px;
    background-color: rgb(255, 255, 255, 0.5);
    position: absolute;
    bottom: 42px;
  }

  &:hover {
    color: #eee;
  }
`;

const RedButton = styled.button`
  background-color: #ea3800;
  color: #fff;
  font-size: 16px;
  width: 150px;
  height: 50px;
  padding: 10px 20px;
  border: none;
  border-radius: 51px;
  cursor: pointer;
  margin-top: 50px;
  margin-left: 40%;

  &:hover {
    background-color: #cc0000;
  }
`;
const ArrowIcon = styled(FaArrowCircleRight)`
  margin-left: 5px;
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
  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };
  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setIsScrolled(scrollY > 0);
  };

  const handleHamburgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResize = useCallback(() => {
    const newIsMobile = window.innerWidth <= 1020;
    setIsMobile(newIsMobile);

    if (newIsMobile && isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    if (isMobileMenuOpen && window.innerWidth > 1020) {
      setIsMobileMenuOpen(false);
    } else if (newIsMobile && !isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

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
  }, [isMobileMenuOpen, handleResize]);

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
          <HamburgerMenu
            onClick={handleHamburgerClick}
            isScrolled={isScrolled}
          />
        </HeaderNavi>
      )}
      {isMobileMenuOpen && (
        <MobileMenu isOpen={isMobileMenuOpen}>
          <CloseButton onClick={handleHamburgerClick}>&times;</CloseButton>
          <MobileMenuItem
            to="/"
            onClick={() => {
              handleMenuClick("home-section");
              handleMobileMenuItemClick();
            }}
          >
            Home
          </MobileMenuItem>
          <MobileMenuItem
            to="/Skills"
            onClick={() => {
              handleMenuClick("skills-section");
              handleMobileMenuItemClick();
            }}
          >
            Skills
          </MobileMenuItem>
          <MobileMenuItem
            to="/Project"
            onClick={() => {
              handleMenuClick("projects-section");
              handleMobileMenuItemClick();
            }}
          >
            Projects
          </MobileMenuItem>
          <MobileMenuItem
            to="/etc"
            onClick={() => {
              handleMenuClick("contact-section");
              handleMobileMenuItemClick();
            }}
          >
            Contact
          </MobileMenuItem>
          <RedButton>
            포트폴리오 보기 <ArrowIcon />
          </RedButton>
        </MobileMenu>
      )}
    </>
  );
}

export default Header;
