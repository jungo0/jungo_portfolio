import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderNavi = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 40px;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Menu = styled.div`
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

const Buttons = styled.div`
  display: flex;

  button {
    margin-left: 10px;
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
  }
`;

function Header() {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const handleMenuClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderNavi>
      <Logo>
        <Link to="/">Jungo's</Link>
      </Logo>
      <Menu>
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
      <Buttons>
        <button onClick={() => navigate("/git")}>Git</button>
        <button onClick={() => navigate("/mail")}>Mail</button>
        <button onClick={() => navigate("/blog")}>Blog</button>
      </Buttons>
    </HeaderNavi>
  );
}

export default Header;
