import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";

const FooterBar = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #fff;
  z-index: 10;
  line-height: 70px;
  padding: 0 70px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-size: 20px;
  }
`;
function Footer() {
  return (
    <FooterBar>
      <Wrapper>
        <div className="copyright">Copyright 2024 jungo</div>
        <div className="menu">
          <a href="https://github.com/jungo0">
            <FaGithubSquare />
          </a>
        </div>
      </Wrapper>
    </FooterBar>
  );
}
export default Footer;
