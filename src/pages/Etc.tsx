import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import TitleForm from "../components/project/Title";
import background from "../img/profile.jpg";
import { IoMdMail } from "react-icons/io";
import { useEffect } from "react";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { IoMdSend } from "react-icons/io";
import Popup from "../components/Popup";
import media from "../styles/media";
import { IoArrowBackCircle } from "react-icons/io5";
const StyledInput = styled.input`
  height: 9%;
  font-size: 1.2rem;
  padding-left: 20px;
  width: 100%;
  margin-bottom: 20px;
  border: 1.5px solid #bfbfbf;
  box-sizing: border-box;
  text-align: left;
  opacity: 0.8;

  &:focus {
    border: 1.5px solid #000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
`;
const OuterContainer = styled(motion.section)`
  height: auto;
  background-color: #f9f6f0;
  padding: 6rem 9rem 2rem 9rem;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  max-width: 1000px;
  padding-top: 55px;
  padding-bottom: 240px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  color: rgba(1, 1, 1, 0.8);
  justify-content: center;
  align-items: center;
  gap: 0 120px;
  height: 100%;
  @media (max-width: 1220px) {
    flex-direction: column;
    gap: 50px 120px;
  }
  ${media.mobile`
    flex-direction: column; 
  `}
`;

const LeftContainer = styled.div`
  flex: 1;
  padding: 0px 0px 0px 0px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  display: flex;
  background-color: rgba(255, 255, 255, 0.7);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  max-height: 800px;
  max-width: 500px;
  min-height: 200px;
  min-width: 300px;
  border-radius: 10px;

  ${media.tablet`
    height: 350px;
    width: 150px;
  `}

  ${media.mobile`
    font-size: 0.7rem;
    width: 100%;
  `}
`;

const RightContainer = styled.div`
  display: flex;
  padding: 0px 0px 0px 0px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  color: rgba(1, 1, 1, 0.7);
  max-height: 800px;
  max-width: 500px;
  min-height: 140px;
  border-radius: 10px;
  min-width: 300px;
  ${media.tablet`
    height: 350px;
    width: 150px;
  `}

  ${media.mobile`
    font-size: 0.7rem;
    width: 100%;
  `}
`;
const FormDisplayContainer = styled.div`
  font-size: 1rem;
  line-height: 1.3;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  box-shadow: 0 0 19px rgba(0, 0, 0, 0.2);
  opacity: 0.8;
  display: flex;
  padding: 30px 20px 20px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  flex: 1;
  flex-direction: column;
  box-sizing: border-box;
  ${media.tablet`
    height: 350px;
    width: 150px;
  `}

  ${media.mobile`
    font-size: 0.7rem;
    width: 100%;
  `}
`;
function Etc() {
  const [form, setForm] = useState({
    title: "",
    name: "",
    message: "",
  });
  const [displayedForm, setDisplayedForm] = useState({
    title: "",
    name: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const handleFocus = (e: {
    target: { placeholder: string; style: { color: string } };
  }) => {
    e.target.placeholder = "";
    e.target.style.color = "#rgba(0, 0, 0, 0.8)";
  };

  const handleBlur = (e: {
    target: { placeholder: any; name: string; style: { color: string } };
  }) => {
    e.target.placeholder =
      e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1);
    e.target.style.color = "rgba(0, 0, 0, 0.7)";
  };

  useEffect(() => {
    emailjs.init("PjwXtcr2XWrRUHAIo");
  }, []);

  const handleButtonClick = () => {
    setDisplayedForm(form);
    setIsFormDisplayed(true);
    setIsPreviewMode(true); //프리뷰 모드
  };

  const handleCancelPopup = () => {
    setIsFormDisplayed(false);
    setShowPopup(false);
    setIsPreviewMode(false);
    setForm({
      title: "",
      name: "",
      message: "",
    });
  };

  const handleConfirmPopup = async () => {
    try {
      setLoading(true);
      setIsPreviewMode(false);
      const serviceId = "service_jsyjtyf";
      const templateId = "template_op9g22e";

      const formData = {
        title: displayedForm.title,
        name: displayedForm.name,
        message: displayedForm.message,
      };

      await emailjs.send(serviceId, templateId, formData, "PjwXtcr2XWrRUHAIo");

      setShowPopup(true);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: {
    preventDefault: () => void;
    currentTarget: string | HTMLFormElement;
  }) => {
    e.preventDefault();
    setDisplayedForm(form);
    setIsFormDisplayed(true);
    const serviceId = "service_jsyjtyf";
    const templateId = "template_op9g22e";

    try {
      setLoading(true);

      await emailjs.sendForm(
        serviceId,
        templateId,
        e.currentTarget,
        "PjwXtcr2XWrRUHAIo"
      );

      setShowPopup(true);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm: any) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  return (
    <OuterContainer>
      <TitleForm titleName="Contact" />
      <InnerContainer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "rgba(1,1,1,0.8)",
          height: "100%",
        }}
      >
        <LeftContainer>
          <div
            style={{
              paddingTop: "20px",
              height: "15%",
              fontSize: "1.8rem",
              fontWeight: "900",
              color: "rgba(1,1,1,0.8)",
              width: "100%",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <span style={{ marginRight: "10px" }}>CONTACT</span>
            <IoMdMail />
          </div>
          <div
            style={{
              fontSize: "0.9rem",
              height: "10%",
              width: "100%",
              paddingTop: "20px",
              boxSizing: "border-box",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Thank you :) <br />
            (~~해서 Gmail로 ~~한 내용들이 입력됩니다)
          </div>
          <img
            src={background}
            alt="Profile"
            style={{
              padding: " 40px 70px",
              height: "70%",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
        </LeftContainer>

        <RightContainer>
          {isFormDisplayed ? (
            <FormDisplayContainer>
              <span
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "900",
                  color: "rgba(1,1,1,1)",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  fontStyle: "bold",
                  marginBottom: "20px",
                }}
              >
                아래와 같이 메일이 전송됩니다!
              </span>
              <p>제목: {displayedForm.title}</p>
              <p>이름: {displayedForm.name}</p>
              <p
                style={{
                  marginBottom: "10px",
                }}
              >
                메세지:{displayedForm.message}
              </p>
              <button
                type="submit"
                onClick={handleConfirmPopup}
                style={{
                  height: "9%",
                  fontSize: "1.3rem",
                  color: "white",
                  padding: "10px 0px",
                  width: "100%",
                  cursor: "pointer",
                  border: "none",
                  backgroundColor: "RGB(25, 75, 138,0.7)",
                  boxSizing: "border-box",
                  borderRadius: "7px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "RGB(25, 75, 138,0.8)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "RGB(25, 75, 138,0.7)")
                }
              >
                <span style={{ marginTop: "30px" }}>Send</span>{" "}
                <IoMdSend style={{ paddingTop: "4px", paddingLeft: "3px" }} />
              </button>

              <button
                type="submit"
                onClick={() => {
                  setIsPreviewMode(false);
                  setIsFormDisplayed(false);
                }}
                style={{
                  marginTop: "13px",
                  padding: "10px 0px",
                  height: "9%",
                  fontSize: "1.3rem",
                  width: "100%",
                  borderRadius: "7px",
                  cursor: "pointer",
                  color: "rgba(1,1,1,0.8)",
                  border: "1px solid rgb(186, 190, 195)",
                  borderColor: "rgba(1,1,1,0.4)",
                  backgroundColor: "RGB(255,255,255,0.7)",
                  boxSizing: "border-box",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(186, 190, 195,0.27)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <span style={{ marginTop: "30px" }}>Back</span>{" "}
                <IoArrowBackCircle
                  style={{
                    paddingTop: "6px",
                  }}
                />
              </button>
            </FormDisplayContainer>
          ) : (
            <form style={{ height: "400px" }} onSubmit={handleSubmit}>
              <StyledInput
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Title"
              />
              <StyledInput
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Name"
              />
              <StyledInput
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{
                  height: "60%",
                  fontSize: "1.2rem",
                  opacity: "0.8",
                  paddingTop: "10px",
                  paddingLeft: "20px",
                  width: "100%",
                  marginBottom: "20px",
                  border: "1.5px solid #BFBFBF",
                  boxSizing: "border-box",
                  textAlign: "left",
                }}
                placeholder="Message"
              />{" "}
              <button
                type="button"
                onClick={handleButtonClick}
                style={{
                  height: "9%",
                  fontSize: "1rem",
                  color: "white",
                  width: "100%",
                  cursor: "pointer",
                  border: "none",
                  backgroundColor: "RGB(25, 75, 138,0.7)",
                  boxSizing: "border-box",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "RGB(25, 75, 138,0.8)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "RGB(25, 75, 138,0.7)")
                }
              >
                <span style={{ marginTop: "20px" }}>PREVIEW</span>{" "}
                <IoMdSend style={{ paddingTop: "4px", paddingLeft: "3px" }} />
              </button>
            </form>
          )}
        </RightContainer>
        {showPopup && (
          <Popup onCancel={handleCancelPopup} onConfirm={handleConfirmPopup} />
        )}
      </InnerContainer>
    </OuterContainer>
  );
}

export default Etc;
