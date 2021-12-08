import React from 'react'
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import webdesign from "../webdesign.png";
import { useCallback, useEffect, useRef } from "react";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
export const Button = styled.button`
  min-width: 75px;
  padding: 10px 25px;
  border-radius: 4px;
  border: none;
  background: #a38d76;
  font-size: 18px;
  cursor: pointer;
  color: white;
  margin: 5px;
  @media (max-width: 768px) {
    min-width: 55px;
    padding: 2.5px 5px;
    font-size: 12px;
  }
`;

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
  width: 70vw;
  height: 60vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: linear-gradient(-120deg, #9a6148e5, #585858e0, #631c2be0);
  background-size: 300% 300%;
  backdrop-filter: blur(5px);
  animation: gradient 10s ease infinite;
  color: #918080;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 20px;
  @media (max-width: 1024px) {
    height: 80vh;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media (max-width: 450px) {
    grid-template-rows: 1fr;
    height: 40vh;
  }
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  @media (max-width: 450px) {
    display: none;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #e2d6d6;
  border: 5px solid black;
  @media (max-width: 800px) {
    font-size: 12px;
    line-height: 1;
    justify-content: center;
  }
  @media (max-width: 450px) {
    height: 40vh;
  }
  .h1Modal {
    margin-bottom: 1vh;
    @media (max-width: 450px) {
    font-size: 20px;
  }
  }
  p {
    font-size: 12px;
    margin-bottom: 0.5vh;
    @media (max-width: 450px) {
    font-size: 10px;
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

export const ModalRWD = ({ showModalRWD, setShowModalRWD }) => {
  const modalRef = useRef();

  const { t } = useTranslation();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModalRWD ? 1 : 0,
    transform: showModalRWD ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModalRWD(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModalRWD) {
        setShowModalRWD(false);
      }
    },
    [setShowModalRWD, showModalRWD]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModalRWD ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModalRWD={showModalRWD}>
              <ModalImg src={webdesign} alt="program" />
              <ModalContent>
                <h1 className="h1Modal">{t("Course Content:")}</h1>
                <p>HTML and CSS</p>
                <p>Applied Visual Design</p>
                <p>Applied Accessibility</p>
                <p>Responsive Web Design Principles</p>
                <p>CSS Flexbox</p>
                <p>CSS Grid</p>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModalRWD((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
