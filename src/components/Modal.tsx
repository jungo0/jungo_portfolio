import styled from "styled-components";
import { useRecoilState } from "recoil";
import { motion, AnimatePresence } from "framer-motion";
import { ModalText } from "../etc/atom";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ProjectProps } from "../pages/Project";
import { fetchProject } from "../etc/projectdb";
import { IoClose } from "react-icons/io5";
import { BiReceipt } from "react-icons/bi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import media from "../styles/media";
interface ButtonProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}
const Overlay = styled(motion.div)`
  position: absolute;
  width: 450%;
  height: 600vh;
  top: 0%;
  left: 0;
  z-index: 110;
  background-color: rgba(0, 0, 0, 0.3);
`;
const Tag = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-left: -30px;
  padding-left: 380px;
  font-size: 0.74rem;
  white-space: nowrap;
  margin-bottom: 15px;
  div {
    margin-left: auto;
  }
  ${media.mobile`
      display:none;
    `}
`;

const Close = styled.div`
  position: fixed;
  cursor: pointer;
  top: -40px;
  opacity: 80%;
  color: white;
  right: -50px;
  font-size: 2.5rem;
`;
const Container = styled(motion.div)`
  position: fixed;
  top: 53%;
  width: 60%;
  height: 64%;
  max-width: 770px;
  min-width: 625px;
  min-height: 780px;

  background-color: white;
  border-radius: 15px;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  z-index: 11111;

  ${media.mobile`
  min-width: 400px;
  min-height: 600px;
    `}
`;
const Contents = styled(motion.div)`
  position: relative;
  color: rgb(1, 1, 1, 0.8);
  padding: 4% 9% 0;
  border-radius: 1.25rem;
  box-shadow: 0 2px 3px rgba(255, 255, 255, 0.1),
    0 10px 20px rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  .image {
    object-fit: cover;
    img {
      border-radius: 15px;
      width: 100%;
      height: 270px;
      display: block;
      margin: 0 auto;

      ${media.mobile`
      display:none;
    `}
    }
  }

  ul {
    padding-left: 20px;
  }

  .text {
    padding-top: 1.875rem;
    h3 {
      padding-bottom: 9px;
      width: 95%;
      border-bottom: 2px solid rgba(0, 0, 0, 0.4);
      font-size: 1.85rem;
      font-style: bold;
      font-weight: 900;
      margin-bottom: 10px;
    }
    ${media.mobile`
    font-size: 1.5rem;
    `}

    .subtitle {
      font-size: 1.15rem;
      font-style: bold;
      margin-top: 28px;
      padding-bottom: 10px;
    }
    ${media.mobile`
    font-size: 1rem;
        margin-top: 20px;
        padding-bottom: 8px;
    `}
    .description {
      color: rgb(1, 1, 1, 0.7);
      line-height: 1.6rem;
      padding-left: 1rem;
    }
    ${media.mobile`
    line-height: 1.5rem;
        padding-left: 0.5rem;
    `}
    .skillList {
      color: rgb(1, 1, 1, 0.7);
      width: 70%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(70px, 3fr));
      gap: 11px 20px;
      li {
        color: #14532d;
        background-color: #f0fdf4;
        padding: 0.5em 0.7em 0.5em 0.6em;
        width: fit-content;
        font-size: 0.8rem;
        border: 1px solid;
        border-color: rgb(21, 128, 61, 0.7);
        text-align: center;
        border-radius: 50px;
      }
    }
    ${media.mobile`
        padding: 0.3em 0.5em 0.3em 0.4em;
     font-size: 0.12rem;
    `}
    a {
      margin-top: 0.938rem;
      font-size: 0.8rem;
      cursor: pointer;
    }
    ${media.mobile`
        font-size: 0.7rem;
    `}
  }
  .progress-part-container {
    display: flex;
    justify-content: space-between;
    padding-right: 100px;
    div {
      color: rgb(1, 1, 1, 0.8);
    }

    ul {
      white-space: nowrap;
      list-style-type: none;
      padding: 0;
    }
  }
`;

const Button: React.FC<ButtonProps> = ({ label, href }) => {
  return <StyledButton href={href}>{label}</StyledButton>;
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2%;
  padding: 0 2%;
  gap: 3%;
`;
const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  height: 40px;
  width: 130px;
  border-radius: 5px;
  border: 1px solid rgba(131, 131, 131, 0.3);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: rgb(131, 131, 131, 0.9);
  transition: background-color 0.3s ease;
  ${media.mobile`
  height: 22px;
  width: 70px;
    `}
  &:nth-child(1) {
    color: white;
    background: linear-gradient(
      to right,
      rgba(148, 168, 226, 1),
      rgba(147, 183, 226, 1)
    );

    &:hover {
      background: linear-gradient(
        to right,
        rgba(148, 168, 226, 0.7),
        rgba(147, 183, 226, 0.7)
      );
    }

    &:active {
      background: linear-gradient(
        to right,
        rgba(148, 168, 226, 0.5),
        rgba(147, 183, 226, 0.5)
      );
    }
  }

  &:hover:not(:nth-child(1)) {
    background: linear-gradient(
      to right,
      rgba(200, 200, 200, 0.25),
      rgba(220, 220, 220, 0.25)
    );
  }

  &:active:not(:nth-child(1)) {
    background: linear-gradient(
      to right,
      rgba(200, 200, 200, 0.5),
      rgba(220, 220, 220, 0.5)
    );
  }
`;

const modalBackGround = {
  init: {
    opacity: 0,
    visiBility: "hidden",
  },
  start: {
    opacity: 1,
    visiBility: "visible",
  },
  end: {
    opacity: 0,
    visiBility: "hidden",
  },
};
const modalForm = {
  init: {
    y: -10,
    opacity: 0,
  },
  start: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
    },
  },
  end: {
    opacity: 0,
    y: -10,
  },
};

function Modal() {
  const [id, setId] = useRecoilState(ModalText);
  const [DB, setDB] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hidden = () => {
    setId("");
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    fetchProject().then((data) => {
      const context = data.docs.map((doc: DocumentData) => ({
        ...doc.data(),
      }));
      setDB(context);
    });
  }, []);

  return (
    <AnimatePresence>
      {id ? (
        <>
          <Container
            variants={modalBackGround}
            initial={isModalOpen ? "start" : "init"}
            animate="start"
            exit="end"
          >
            {DB.filter((ele: ProjectProps) => ele.id === id).map(
              (ele: ProjectProps) => (
                <Contents
                  variants={modalForm}
                  initial="init"
                  animate="start"
                  exit="end"
                  key={ele.id}
                  layoutId={id}
                >
                  <Tag>
                    {ele.tag.map((tag, index) => (
                      <div key={index}>
                        <div>{tag}</div>
                      </div>
                    ))}
                  </Tag>
                  <div className="image">
                    <img
                      src={require(`../img/${ele.img}.png`)}
                      alt={`${ele.img}`}
                    />
                  </div>
                  <div className="text">
                    <div>
                      <h3>{ele.name}</h3>
                    </div>
                    <div>
                      <h5 className="subtitle">
                        <b>
                          <BiSolidCategoryAlt style={{ paddingTop: "3.5px" }} />
                        </b>{" "}
                        Description
                      </h5>
                      <p className="description">{ele.text}</p>
                    </div>

                    <div className="progress-part-container">
                      <div>
                        <h5 className="subtitle">
                          <b>
                            <BsFillPeopleFill
                              style={{
                                paddingTop: "4px",
                                fontSize: "1.16rem",
                              }}
                            />
                          </b>{" "}
                          Progress
                        </h5>{" "}
                        <p>
                          {ele.progress.map((progress, index) => (
                            <li
                              key={index}
                              style={{ color: "  rgb(1, 1, 1, 0.7)" }}
                            >
                              {" "}
                              {progress}
                            </li>
                          ))}
                        </p>
                      </div>

                      <div>
                        <h5 className="subtitle">
                          <b>
                            <BiReceipt
                              style={{
                                paddingTop: "3.8px",
                                fontSize: "1.16rem",
                              }}
                            />
                          </b>{" "}
                          Part
                        </h5>
                        <p>
                          {ele.part.map((part, index) => (
                            <li
                              key={index}
                              style={{ color: "  rgb(1, 1, 1, 0.7)" }}
                            >
                              {part}
                            </li>
                          ))}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h5 className="subtitle">
                        <b>
                          <FaTools style={{ paddingTop: "3.8px" }} />
                        </b>{" "}
                        Use Skill
                      </h5>
                      <ul className="skillList">
                        {ele.skill.map((ele, index) => (
                          <li
                            key={index}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <FaRegCheckCircle style={{ marginRight: "5px" }} />{" "}
                            {ele}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="button-container">
                      <ButtonContainer>
                        <Button
                          label="Site"
                          href={ele.gitLink}
                          icon={undefined}
                        />
                        <Button
                          label="GitHub"
                          href={ele.gitCode}
                          icon={undefined}
                        />
                      </ButtonContainer>
                    </div>
                  </div>
                </Contents>
              )
            )}
            <Close onClick={hidden}>
              <IoClose />
            </Close>
          </Container>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default Modal;
