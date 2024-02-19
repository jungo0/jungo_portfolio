import styled from "styled-components";
import { useRecoilValue } from "recoil";
const TitleText = styled.div`
  overflow: hidden;
  font-size: 2.3rem;
  margin-bottom: 0.938rem;
  color: rgba(1, 1, 1, 0.7);
  span {
    display: inline-block;
    padding-bottom: 0.5rem;
    position: relative;
    letter-spacing: 7px;
    text-transform: uppercase;
    font-weight: 700;
    color: #333;
    &::after {
      content: "";
      margin-left: 1.563rem;
      position: absolute;
      width: 5000px;
      height: 1px;
      background-color: #7d7789;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  @media ${(props) => props.theme.mobile} {
    span {
      letter-spacing: 2px;
    }
  }
`;
interface titleText {
  titleName: string;
}

function TitleForm(props: titleText) {
  return (
    <TitleText>
      <span>{props.titleName}</span>
    </TitleText>
  );
}
export default TitleForm;
