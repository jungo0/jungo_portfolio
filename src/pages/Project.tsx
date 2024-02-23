import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import TitleForm from "../components/project/Title";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { fetchProject } from "../etc/projectdb";
import { DocumentData } from "firebase/firestore";
import { FaGripLines } from "react-icons/fa6";
import { BsGridFill } from "react-icons/bs";
import { Loading } from "../components/Loading";
import Modal from "../components/Modal";
import { ModalText } from "../etc/atom";
import arrow from "../img/arrow.png";

const Container = styled(motion.section)`
  height: auto;
  background-color: #f9f6f0;
  padding: 6rem 7rem 4rem 6rem;
  .button {
    text-align: right;
    button {
      color: ${(props) => props.theme.textColor};
      background-color: transparent;
      border: none;
      font-size: 22px;
    }
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const ContentBox = styled(motion.div)<{ shape: string }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1600px;
  margin: 0 auto;

  ${(props) =>
    props.shape === "true"
      ? css`
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
          &:nth-child(n + 6) {
            grid-column: span 3;
          }
        `
      : css`
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          &:nth-child(n + 3) {
            grid-column: span 3;
          }
        `}
`;

const ProjectBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  cursor: pointer;
  margin: 0.5rem 0.2rem;
  border: 2px solid #1c1917;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;

  .imgBox {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .arrowIcon {
    position: absolute;
    bottom: 4%;
    right: 6%;
    width: 17%;
    height: auto;
    opacity: 1;
    transition: opacity 0.3s, transform 0.3s;
  }

  .title {
    color: #fff;
    position: absolute;
    bottom: 0;
    text-transform: capitalize;
    margin-top: 5px;
    height: 0;
    line-height: 1;
    padding-left: 20px;
    font-size: 1.2rem;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.4s;
    opacity: 0;
    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }

  .clickText {
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    margin-top: 5px;
    position: absolute;
    top: 57%;
    z-index: 20;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.5s;
    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  &:hover .title {
    top: 49%;
    z-index: 5;
    left: 50%;
    opacity: 1;
    width: 80%;
    height: 80%;
    border: 2px solid #fff;
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover .clickText {
    opacity: 1;
  }
  &:hover .arrowIcon {
    transform: scale(1.2);
  }
`;

export interface ProjectProps {
  id: string;
  name: string;
  state: string;
  skill: string[];
  imgTh: string;
  part: string[];
  progress: string[];
  gitLink: string;
  gitCode: string;
  img: string[];
  text: string;
  tag: string[];
}

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setId = useSetRecoilState(ModalText);
  const [shape, Setshape] = useState(false);
  const [DB, setDB] = useState([]);
  useEffect(() => {
    fetchProject()
      .then((data) => {
        const context = data.docs.map((doc: DocumentData) => ({
          ...doc.data(),
        }));
        setDB(context);
      })
      .catch((error) => {
        console.error("프로젝트 불러오기 에러:", error);
      });
  }, []);

  return (
    <Container id="projects-section">
      <TitleForm titleName="Projects" />
      <div className="button">
        <button onClick={() => Setshape((prev) => !prev)}>
          {shape ? <FaGripLines /> : <BsGridFill />}
        </button>
      </div>
      {DB ? (
        <ContentBox shape={shape.toString()}>
          {DB.map((element: ProjectProps) => (
            <ProjectBox
              key={element.name}
              layoutId={element.name}
              onClick={() => {
                setId(element.id);
                setIsModalOpen(true);
              }}
            >
              <img
                className="imgBox"
                src={require(`../img/${element.imgTh}.jpeg`)}
                alt={`${element.imgTh}`}
              />
              <h3 className="title">{element.name}</h3>
              <div className="clickText">Click!</div>
              <img className="arrowIcon" src={arrow} alt="Arrow" />
            </ProjectBox>
          ))}
        </ContentBox>
      ) : (
        <Loading />
      )}
      {isModalOpen && <Modal />}
    </Container>
  );
}

export default Project;
