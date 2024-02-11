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
      transition: all 0.3s ease;
      position: relative;

      &::after {
        width: 0;
        left: 0;
        position: absolute;
        height: 100%;
        color: #fff;
        content: "";
        z-index: -1;
        transition: all 0.6s ease 0.3s;
        background-color: #333;
      }

      &:hover {
        color: #fff;
      }

      &:hover::after {
        width: 100%;
      }

      &.active {
        left: 0;
        height: 0;
        background-color: #333;
        height: 100%;
        z-index: 100;
        color: #fff;
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
              홈
            </Link>
          </li>
          <li>
            <Link to="/About" className={location === "/About" ? "active" : ""}>
              소개
            </Link>
          </li>
          <li>
            <Link to="/etc">기술스택</Link>
          </li>
          <li>
            <Link
              to="/Project"
              className={location === "/Project" ? "active" : ""}
            >
              프로젝트
            </Link>
          </li>
        </ul>
      </Menu>
      <Buttons>
        {/* Add your three buttons here */}
        <button>Git</button>
        <button>Mail</button>
        <button>Blog</button>
      </Buttons>
    </HeaderNavi>
  );
}

export default Header;
