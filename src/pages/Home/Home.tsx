import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import list_icon from "../../img/list_icon.png";
import profile from "../../img/profile.jpg";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { showHide, showHideChild } from "../../keyframe/keyFrame";
import { useInterval } from "../../hooks/setInterVal";
import background from "../../img/background1.png";
import "../../styles/font.css";
import cloud1 from "../../img/cloud1.png";
import cloud2 from "../../img/cloud2.png";

export const CloudContainer = styled(motion.div)`
  margin-left: -20px;
  position: absolute;
  @media (max-width: 768px) {
    margin-left: 120px;
    margin-top: 30px;
  }
`;

export const CloudImage = styled.img`
  width: 50%;
  height: auto;
`;

const HomeContainer = styled.section`
  padding-top: 13rem;
  position: relative;
  padding-bottom: 100px;
  height: auto;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  scroll-snap-align: start;
`;

const Wrapper = styled(motion.div)`
  gap: 0 85px;
  display: flex;
  width: 70%;
  position: relative;
  min-width: 300px;
  max-width: 1100px;
  min-height: 320px;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1c1917;
  text-align: center;
  scroll-snap-align: start;

  @media (max-width: 768px) {
    flex-direction: column;
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
  padding: 35px;
  display: flex;
  min-width: 360px;
  min-height: 320px;
  flex-direction: column;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  min-width: 350px;
  align-items: center;
`;

const Image = styled.img`
  width: 380px;
  height: 450px;
  border-radius: 15px;
  margin-top: 60px;

  @media (max-width: 1500px) {
    width: 300px;
    height: 370px;
  }

  @media (max-width: 768px) {
    width: 55%;
    height: 60%;
    display: none;
    margin-top: -57%;
  }
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
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
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
  font-weight: 500;
  font-size: 0.9rem;
`;
function Home() {
  const divtag = useRef<HTMLDivElement>(null);
  let arrIndex = 0;
  const WORD_TYPING_SPEED = 1400;
  const msgArr = ["Creative", "Proactive", "Adaptable"];

  const [scrollOffset, setScrollOffset] = useState(-360);

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

  const updateScrollOffset = () => {
    const windowHeight = window.innerHeight;
    const newOffset = windowHeight < 1100 ? 520 : -480;
    setScrollOffset(newOffset);
  };

  useEffect(() => {
    updateScrollOffset();

    window.addEventListener("resize", updateScrollOffset);

    return () => {
      window.removeEventListener("resize", updateScrollOffset);
    };
  }, []);
  return (
    <HomeContainer id="home-section">
      <Wrapper variants={showHide} initial="start" animate="end">
        <CloudContainer
          style={{ top: "3%", left: "50%", opacity: "0.8" }}
          initial={{ y: 20 }}
          animate={{
            y: [20, 7, 20],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        >
          <CloudImage src={cloud1} alt="Cloud1" />
        </CloudContainer>
        <CloudContainer
          style={{ top: "20px", left: "40%", opacity: "0.8" }}
          initial={{ y: 40 }}
          animate={{
            y: [40, 55, 40],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <CloudImage src={cloud2} alt="Cloud2" />
        </CloudContainer>
        <TextBox>
          <Animation variants={showHideChild}>
            <img
              src={list_icon}
              alt="List Icon"
              style={{
                marginRight: "12px",
                color: "rgba(1,1,1,0.8)",
                marginTop: "7px",
                width: "15px",
                height: "15px",
              }}
            />
            Developer
            <div className="textanibox" ref={divtag}>
              {msgArr.map((m, i) => (
                <div className="isHidden" key={i}>
                  {m}
                </div>
              ))}
            </div>
          </Animation>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              fontWeight: 1000,
              fontFamily: "GmarketSansTTFMedium",
              textAlign: "left",
              color: "#436850",
            }}
          >
            프론트엔드 개발자
          </h2>
          <h2
            style={{
              fontSize: "3.5rem",
              marginBottom: "2.8rem",
              fontFamily: "Pretendard_ExtraBold",
              textAlign: "left",
              whiteSpace: "nowrap",
              color: "#3C3633",
            }}
          >
            민정호입니다.
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              textAlign: "left",
              marginBottom: "7rem",
              maxWidth: "420px",
              fontFamily: "Pretendard_Medium",
              lineHeight: "1.3",
              opacity: "0.6",
              color: "#3C3633",
            }}
          >
            안녕하세요 소프트웨어학과를 졸업하고 <br />웹 프론트엔드를
            중점적으로 공부했습니다. <br />
            빠르게 변화하는 웹 기술 환경에서 사용자 친화적인
            <br /> 인터페이스를 제공하고 싶습니다.
          </p>
          <Column>
            <ScrollLink
              to="skills-section"
              spy={true}
              smooth={true}
              offset={scrollOffset}
              duration={600}
            >
              <Button>
                <ButtonText
                  style={{
                    fontFamily: "GmarketSansTTFMedium",
                    marginLeft: "10px",
                  }}
                >
                  더 알아보기
                </ButtonText>
                <Icon />
              </Button>
            </ScrollLink>
          </Column>
        </TextBox>
        <Image src={profile} alt="Profile" />
      </Wrapper>
    </HomeContainer>
  );
}

export default Home;
