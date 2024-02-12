import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderNavi = styled.header`
  position: fixed;
  width: 100%;
  top: 20px;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
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
              className={
                location === "home" || location === "/" ? "active" : ""
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Skills"
              className={location === "/Skills" ? "active" : ""}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/Project"
              className={location === "/Project" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="/etc">Contact</Link>
          </li>
        </ul>
      </Menu>
      <Buttons>
        <button>Git</button>
        <button>Mail</button>
        <button>Blog</button>
      </Buttons>
    </HeaderNavi>
  );
}

export default Header;
