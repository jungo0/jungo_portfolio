import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main`
  position: absolute;
  top: 70px;
  bottom: 70px;
  left: 70px;
  right: 70px;
  overflow: hidden;
  & > div {
    height: 100%;
    display: flex;
  }
`;
const Picture = styled.div`
  width: 40%;
  background-color: transparent;
  position: relative;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Contents = styled.div`
  width: calc(100% - 40%);
  background-color: transparent;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function Layout() {
  return (
    <Container>
      <div>
        <Picture>
          <img src={require("../img/back.jpg")} alt="back" />
        </Picture>
        <Contents>
          <Outlet />
        </Contents>
      </div>
    </Container>
  );
}

export default Layout;
