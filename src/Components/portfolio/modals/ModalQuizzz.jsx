import React from 'react'
import styled from "styled-components";
import modalbg from "./modalbg.jpg";
import { MdClose } from "react-icons/md";
import { useCallback, useEffect, useRef } from "react";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import LanguageIcon from "@material-ui/icons/Language";

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
  height: 75vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: white;
  color: #000000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  
  
  @media (max-width: 831px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 80vh;
    width: 75vw;
  }
  @media (max-width: 456px) {
    grid-template-rows: 1fr;
    height: 65vh;
    width: 80vw;
  }
`;
const ModalContentLeft = styled.div`
  height: 100%;
  width: 100%;
  background-position: 70% 50%;
  background: no-repeat center center cover;
  background-size: 120% 140%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  color: #141414;
  border: 5px solid black;
  
  @media (max-width: 456px) {
    display: none;
  }
`;
const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #bdc3c76a, #4a586645),
    url(${modalbg});
  background-position: 70% 50%;
  background: no-repeat center center cover;
  background-size: 120% 140%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  line-height: 2;
  color: #141414;
  border: 5px solid black;
  
  
  .h1Modal {
    margin-bottom: 4px;
    margin-top: 4vh;
    @media (max-width: 550px), (max-height: 700px) {
      font-size: 18px;
    }
  }
  .descriptionApp {
    height: auto;
    margin-left: 7vw;
    margin-right: 3vw;
    line-height: 1.3;
    word-spacing: 1px;
    font-size: calc(10px + 0.25vw);

    @media (max-width: 1024px), (max-height: 800px) {
      font-size: 11px;
    }
    @media (max-width: 831px) {
      margin-left: 13vw;
      margin-right: 4vw;
    }
    @media (max-width: 550px) {
      font-size: 10px;
    }
  }

  h2 {
    margin-bottom: 5px;
    @media (max-width: 550px), (max-height: 700px) {
      font-size: 16px;
    }
  }
  .linksModal {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5vh;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #ffffff;
    border: none;
  }
  a,
  a:visited,
  a:hover,
  a:active {
    color: black;
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
const VideoSmallModal = styled.video`
  display: none;
  @media (max-width: 456px), (max-height: 500px) {
    display: block;
  }
`;
const BlockIframe = styled.div`
  position: absolute;
  top: 0px;
  height: 100%;
  width: 100%;
  pointer-events: none;
  
`;

export const ModalQuizzz = ({
  showModalQuizzz,
  setShowModalQuizzz,
  setModal,
  modal,
}) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModalQuizzz ? 1 : 0,
    transform: showModalQuizzz ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModalQuizzz(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModalQuizzz) {
        setShowModalQuizzz(false);
      } 
    },
    [setShowModalQuizzz, showModalQuizzz]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModalQuizzz ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModalQuizzz={showModalQuizzz}>
              <ModalContentLeft>
                {modal.videoSrc ? (
                  <video
                    id="modalVideo"
                    width="100%"
                    height="100%"
                    autoPlay="autoplay"
                    loop="loop"
                    src={modal.videoSrc}
                    type="mp4"
                  ></video>
                ) : (
                  <div
                    className="iframeWrapper"
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <iframe
                      title={modal.title}
                      src={modal.src}
                      width="100%"
                      height="100%"
                    />
                    <BlockIframe />
                  </div>
                )}
              </ModalContentLeft>

              <ModalContent>
                <h1 className="h1Modal">{modal.title}</h1>
                <p className="descriptionApp">
                  {/* {t(
                    "My first project using React.js without following an online tutorial."
                  )} */}
                  {modal.desc}
                </p>
                <p className="descriptionApp">
                  {/* {t(
                    "Basic quiz application that helped me learn a lot of react's fundamentals."
                  )} */}
                  {modal.desc2}
                </p>
                <h2>Dependencies || Tech</h2>
                <p className="descriptionApp">{modal.dep}</p>
                {modal.dep2 ? (
                  <p className="descriptionApp">{modal.dep2}</p>
                ) : null}
                <div className="linksModal">
                  {modal.src ? (
                    <a
                      className="link link-one"
                      href={modal.src}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {/* <LanguageIcon className="languageicon" /> */}
                      Website
                    </a>
                  ) : (
                    <VideoSmallModal
                      id="modalVideo"
                      width="200px"
                      height="200px"
                      autoPlay="autoplay"
                      loop="loop"
                      src={modal.videoSrc}
                      type="mp4"
                    ></VideoSmallModal>
                  )}
                  <a
                    className="link link-two"
                    href={modal.git}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {/* <GitHubIcon className="githubicon" /> */}
                    Source Code
                  </a>
                </div>
              </ModalContent>

              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModalQuizzz((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
