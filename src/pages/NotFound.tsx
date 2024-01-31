import { Link } from "react-router-dom";
import styled from "styled-components";
import { FcHome } from "react-icons/fc";

const NotFoundPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  & > a {
    display: block;
    margin-top: 40px;
    text-align: center;
    transition: 0.3s;
    &:hover {
      transform: translateY(-10px);
    }
    svg {
      margin-right: 10px;
    }
  }
`;
const NotFound = () => {
  return (
    <NotFoundPage>
      404 존재하지 않는 페이지입니다.
      <Link to={"/"}>
        <FcHome />
      </Link>
    </NotFoundPage>
  );
};

export default NotFound;
