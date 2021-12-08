import React from 'react'
import styled from "styled-components";
import { MdClose } from "react-icons/md";

import { useCallback, useEffect, useRef } from "react";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";

import { useTranslation } from "react-i18next";

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
  color: #1f1e1e;
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
  background: conic-gradient(from 90deg, #e76f51, #287271ae, #297d79, #2a9d8f);
  animation: gradientPresentModal 15s ease infinite;
  background-size: 300% 300%;
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
    font-size: calc(10px + 0.35vw);
    line-height: 1.3;
    justify-content: center;
    padding: 0px 15px;
  }
  h1 {
    margin-bottom: 2vh;
    margin-top: 1vh;
    @media (max-width: 1024px) {
    }
    @media (max-width: 550px) {
      font-size: 16px;
      margin-bottom: 0.5vh;
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
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;
const ModalContentRight = styled.div`
  background: conic-gradient(from -90deg, #e76f51, #297d79, #287271ae, #2a9d8f);
  animation: gradientPresentModalReversed 15s ease infinite;
  background-size: 300% 300%;
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
  .h1Modal {
    margin-bottom: 2vh;
    margin-top: 1vh;
    @media (max-width: 550px) {
      font-size: 16px;
      margin-bottom: 0.5vh;
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

export const PresentModal = ({ showModalPresent, setShowModalPresent }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModalPresent ? 1 : 0,
    transform: showModalPresent ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModalPresent(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModalPresent) {
        setShowModalPresent(false);
      }
    },
    [setShowModalPresent, showModalPresent]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  const { t } = useTranslation();

  return (

    
    <>
      {showModalPresent ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModalPast={showModalPresent}>
              <ModalContentLeft>
                <h1 className="h1Modal">{t("Formation")}</h1>
                <p>
                  {t("Front-End Web Development Course in Intec Brussels 2021")}{" "}
                </p>
                <p>
                  {t(
                    "This course got me hooked on coding and helped me develop tools for autonomously learning more in this field."
                  )}
                </p>

                <h1 className="h1Modal">{t("Self-Improvement")}</h1>
                <p>
                  {t(
                    "The use of FreeCodeCamp, Sololearn, Stack Overflow, Codepen and Youtube allow me to push my learning curve outside of traditional education."
                  )}
                </p>
              </ModalContentLeft>
              <ModalContentRight>
                <h1 className="h1Modal">{t("The Present Goal")}</h1>
                <p>
                  {t(
                    "I am currently looking for a job where I can apply my skills in front-end and continue my learning progress into back-end technologies."
                  )}
                </p>
              </ModalContentRight>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModalPresent((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
