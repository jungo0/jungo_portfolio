import styled from "styled-components";
import left_text from "../../img/left_text.png";
import right_text from "../../img/right_text.png";

const TitleText = styled.div`
  overflow: hidden;
  font-family: "GmarketSansTTFMedium";
  font-size: 2rem;
  color: rgba(1, 1, 1, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 25px;
    margin: 0 25px;
    margin-bottom: 20px;
  }

  span {
    display: flex;
    align-items: center;
    color: #333;
    margin-bottom: 1rem;
    position: relative;
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
      <img src={left_text} alt="Left Text" />
      <span>{props.titleName}</span>
      <img src={right_text} alt="Right Text" />
    </TitleText>
  );
}

export default TitleForm;
