import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { FaSquareGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SiVelog } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
interface HeaderProps {
  isScrolled: boolean;
}

const HeaderNavi = styled.header<HeaderProps>`
  position: fixed;
  width: 100%;
  top: -1%;
  background-color: white;
  box-shadow: ${(props) =>
    props.isScrolled ? "0 2px  rgba(0, 0, 0, 1)" : "none"};
  border-bottom: ${(props) => (props.isScrolled ? "1px solid black" : "none")};
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) =>
    props.isScrolled ? "14px 0px 0px 0px" : "17px 0px 0px 0px"};
  transition: background-color 0.2s, box-shadow 0.2s, padding 0.2s;
`;

const Logo = styled.div<{ isScrolled: boolean }>`
  font-size: 35px;
  font-weight: bold;
  margin-left: 60px;
  transition: font-size 0.2s;

  ${(props) =>
    props.isScrolled &&
    css`
      font-size: 30px;
    `}
`;

const Menu = styled.div<{ isScrolled: boolean }>`
  position: fixed;
  top: 20;
  left: 38%;
  ul {
    display: flex;
  }

  li {
    margin-right: 5px;
    line-height: 38px;

    & > a {
      padding: 0 20px;
      display: inline-block;
      color: #333;
      font-weight: 500;
      position: relative;

      &:hover {
        color: blue;
      }
    }
  }
`;

const ButtonsWrapper = styled.div<{ isScrolled: boolean }>`
  display: flex;
  align-items: flex-end;
  border-width: 0px 0px ${(props) => (props.isScrolled ? "0px 2px" : "2px 2px")};
  border-style: solid;
  border-color: black;
  border-radius: 5px;
  padding: ${(props) =>
    props.isScrolled ? "26px 10px 30px 20px" : "15px 10px 34px 20px"};
  position: relative;
  transition: padding 0.3s ease;
`;

const Buttons = styled.div<{ isScrolled: boolean }>`
  display: flex;
  align-items: flex-end;
  margin-top: ${(props) => (props.isScrolled ? "-4px" : "11px")};
  transition: margin-top 0.3s ease;
`;

const Button = styled.button`
  color: #333;
  background-color: #87ceeb;
  cursor: pointer;
  border: 0px solid #fff;
  border-radius: 5px;
  padding: 5px 7px;
  margin-right: 10px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s,
    transform 0.3s;

  &:hover {
    background-color: #4682b4;
    color: #fff;
    border-color: #fff;
    transform: translateY(-1px);
  }
`;

const HamburgerMenu = styled(GiHamburgerMenu)`
  font-size: 28px;
  cursor: pointer;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MobileMenuItem = styled(Link)`
  font-size: 24px;
  margin-bottom: 20px;
  text-decoration: none;
  color: #333;

  &:hover {
    color: blue;
  }
`;

function Header() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <HeaderNavi isScrolled={isScrolled}>
      <Logo isScrolled={isScrolled}>
        <Link to="/">Jungo's</Link>
      </Logo>
      <Menu isScrolled={isScrolled}>
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
      <ButtonsWrapper isScrolled={isScrolled}>
        <Buttons isScrolled={isScrolled}>
          <Button onClick={() => navigate("/git")}>
            <FaSquareGithub />
          </Button>
          <Button onClick={() => navigate("/mail")}>
            <IoIosMail />
          </Button>
          <Button onClick={() => navigate("/blog")}>
            <SiVelog />
          </Button>
        </Buttons>
      </ButtonsWrapper>
    </HeaderNavi>
  );
}

export default Header;
