import React from 'react'
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useCallback, useEffect, useRef } from "react";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import curriculum from "../../../curriculum.pdf";
import { useTranslation } from "react-i18next";
import { AiOutlineDownload } from 'react-icons/ai';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const ModalWrapper = styled.div`
  width: 75vw;
  height: 60vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #272424;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  @media (max-width: 1024px) {
    height: 80vh;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const ModalContentLeft = styled.div`
  background: conic-gradient(from -90deg, #2a9d8f, #297d79, #287271ae, #e76f51);
  background-size: 300% 300%;
  animation: gradientModal 30s ease infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  color: black;
  border: 5px solid black;
  text-align: center;
  font-size: calc(12px + 0.35vw);
  padding: 20px;

  @media (max-width: 1440px) {
    font-size: 12px;
    line-height: 1.2;
  }
  @media (max-width: 550px) {
    line-height: 1;
    padding: 7.5px;
  }
  h1 {
    margin-bottom: 2vh;
    margin-top: 1vh;
    @media (max-width: 1024px) {
    }
    @media (max-width: 550px) {
      font-size: 16px;
      margin-bottom: 1vh;
    }
  }
  p {
    text-align: center;
    margin-bottom: 1vh;
    padding: 0px 30px;
    @media (max-width: 550px) {
      font-size: 10.5px;
      padding: 0px 12px;
    }
    span {
      text-decoration: underline;
    }
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;
const ModalContentRight = styled.div`
  background: conic-gradient(from 90deg, #e76f51, #287271ae, #297d79, #2a9d8f);
  background-size: 300% 300%;
  animation: gradientModalReverse 30s ease infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  color: black;
  border: 5px solid black;
  text-align: center;
  font-size: calc(12px + 0.35vw);
  padding: 20px;

  @media (max-width: 1440px) {
    font-size: 12px;
    line-height: 1.2;
  }
  @media (max-width: 550px) {
    line-height: 1;
    padding: 7.5px;
  }
  .h1Modal {
    margin-bottom: 2vh;
    margin-top: 1vh;
    @media (max-width: 550px) {
      font-size: 16px;
      margin-bottom: 1vh;
    }
  }
  p {
    text-align: center;
    margin-bottom: 1vh;
    padding: 0px 30px;
    @media (max-width: 550px) {
      font-size: 11px;
      padding: 0px 12px;
    }
    span {
      text-decoration: underline;
    }
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const ItemContainer = styled.div`
  padding: 10px 10px;
  a:link,
  a:visited {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;
const CvButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  flex-direction: row;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  color: black;
  border: 1px solid black;
  transition: 2s ease all;
  margin-top: 1vh;
  font-size: 16px;
  padding: 5px 10px;
  @media (max-width: 550px) {
    width: 175px;
    font-size: 11px;
    padding: 5px 12px;
  }
  &:hover {
    font-family: "Major Mono Display", monospace;
  }
`;

export const PastModal = ({ showModalPast, setShowModalPast }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModalPast ? 1 : 0,
    transform: showModalPast ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModalPast(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModalPast) {
        setShowModalPast(false);
      }
    },
    [setShowModalPast, showModalPast]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const { t } = useTranslation();

  return (
    <>
      {showModalPast ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModalPast={showModalPast}>
              <ModalContentLeft>
                <h1 className="h1Modal">{t("Education")}</h1>

                <p>
                  {t(
                    "Degree in Speech Therapy by the IPL in Leiria, Portugal."
                  )}
                </p>

                <p>
                  {t(
                    "Several internships working with people suffering from communication disabilities."
                  )}
                </p>

                <h1 className="h1Modal">{t("Work Experience")}</h1>
                <p>{t("One year as a Speech Therapist in Portugal.")}</p>

                <p>{t("Four years as a Receptionist in Belgium")}</p>
                <p>
                  {t(
                    "Two Years as an Educator in the Kindergartens of the European Commission"
                  )}
                </p>
              </ModalContentLeft>
              <ModalContentRight>
                <h1 className="h1Modal">{t("Traits I Learned to Value")}</h1>
                <p>{t("Assertive Communication")}</p>
                <p>{t("Critical Thinking and Adaptability")}</p>
                <p>{t("Empathy and Positive Attitude")}</p>
                <p>{t("Responsibility and Self-Improvement")}</p>
                <p>{t("TeamWork and Work Ethic")}</p>
                <ItemContainer>
                  <a
                    href={curriculum}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <CvButton>
                    <AiOutlineDownload/>
                      <p>{t("Download CV")}</p>
                      
                    </CvButton>
                  </a>
                </ItemContainer>
              </ModalContentRight>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModalPast((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
