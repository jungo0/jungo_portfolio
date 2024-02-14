import React, { useRef } from "react";
import styled from "styled-components";
import list_icon from "../../img/list_icon.png";
import profile from "../../img/profile.jpg";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { showHide, showHideChild } from "../../keyframe/keyFrame";
import { useInterval } from "../../hooks/setInterVal";
import { Link } from "react-router-dom";

const HomeContainer = styled.section`
  position: relative;
  width: 100%;
  height: 68vh;
  background-color: #f9f6f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1c1917;
  text-align: center;
  scroll-snap-align: start;
`;

const Wrapper = styled(motion.div)`
  padding-left: 6.25rem;
  display: flex;
  width: 80%;
  margin: 0 auto;
  @media ${(props) => props.theme.mobile} {
    padding-left: 1rem;
  }
  .name {
    font-size: 4.1rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 1.875rem;
    color: ${(props) => props.theme.textColor};
  }
  .line {
    display: inline-block;
    width: 4.375rem;
    height: 0.313rem;
    background-color: ${(props) => props.theme.bgColor};
    margin-bottom: 1.875rem;
  }
`;

const Animation = styled(motion.h3)`
  font-size: 1.563rem;
  margin-bottom: 1.7rem;
  font-weight: 400;
  color: ${(props) => props.theme.textColor};
  display: flex;
  .textanibox {
    margin-left: 0.5rem;
    position: relative;
    transform-origin: 50% 100%;
    & > div {
      position: absolute;
      width: 100%;
      color: ${(props) => props.theme.textColor};
      transition: 0.5s;
      font-weight: bold;
      &.isActive {
        opacity: 1;
        top: 1%;
        visibility: visible;
        transform: rotateX(0deg);
      }
      &.isHidden {
        visibility: hidden;
        opacity: 0;
        transform: rotateX(-180deg);
      }
    }
  }
`;

const TextBox = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Description = styled.p`
  font-size: 1.2rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const ImageBox = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 75%;
  height: 110%;
`;

const Icon = styled(FaArrowDownLong)`
  width: 11%;
  height: auto;
  color: white;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 50px;
  border-radius: 25px;
  background-color: #ea3800;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d33201;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const ButtonText = styled.span`
  margin-right: 10px;
  color: white;
`;
function Home() {
  const divtag = useRef<HTMLDivElement>(null);
  let arrIndex = 0;
  const WORD_TYPING_SPEED = 1000;
  const msgArr = ["Creative", "Developer", "good"];

  const onChangeMsg = () => {
    if (divtag.current) {
      const children = Array.from(divtag.current.children);

      children.forEach((child, i) => {
        const className = i === arrIndex ? "isActive" : "isHidden";
        child.classList.replace(child.classList[0], className);
      });

      arrIndex = (arrIndex + 1) % 3;
    }
  };

  useInterval(() => {
    onChangeMsg();
  }, WORD_TYPING_SPEED);

  return (
    <HomeContainer id="home-section">
      <Wrapper variants={showHide} initial="start" animate="end">
        <TextBox>
          <h1
            style={{
              fontSize: "1.5rem",
              marginBottom: "20px",
              textAlign: "left",
            }}
          ></h1>{" "}
          <Animation variants={showHideChild}>
            <img
              src={list_icon}
              alt="List Icon"
              style={{
                marginRight: "12px",
                marginTop: "7px",
                width: "15px",
                height: "15px",
              }}
            />
            Creative
            <div className="textanibox" ref={divtag}>
              {msgArr.map((m, i) => (
                <div className="isHidden" key={i}>
                  {m}
                </div>
              ))}
            </div>
          </Animation>
          <Description>
            <div style={{ flex: 1, marginRight: "20px" }}>
              <h2
                style={{
                  fontSize: "2.2rem",
                  marginBottom: "10px",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                안녕하세요
              </h2>
              <h2
                style={{
                  fontSize: "2.2rem",
                  marginBottom: "10px",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                프론튼엔드 개발자
              </h2>
              <h2
                style={{
                  fontSize: "2.2rem",
                  marginBottom: "2.8rem",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                민정호입니다.
              </h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  textAlign: "left",
                  fontWeight: "350",
                  marginBottom: "2.2rem",
                }}
              >
                안녕하세요. 공부가 취미인 풀 스택 웹 개발자입니다. 매우 꼼꼼한
                성격, 그리고 공부를 밥 먹듯이 하는 습관이 저의 장점입니다.
              </p>
              <Column>
                <Button>
                  <ButtonText>더 알아보기</ButtonText>
                  <Icon />
                </Button>
              </Column>
            </div>
          </Description>
        </TextBox>
        <ImageBox>
          <Image src={profile} alt="Profile" />
        </ImageBox>
      </Wrapper>
    </HomeContainer>
  );
}

export default Home;
