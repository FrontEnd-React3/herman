import React from "react";
import styled from "styled-components";
import sample from "./bg.mp4";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const VideoBG = styled.video`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  background-color: lightgrey;
  object-position: 25% 60%;
  opacity: 1;

  @media (max-width: 1024px) {
    object-position: 40% 60%;
  }
  @media (max-width: 550px) {
    object-position: 30% 50%;
  }
  @media (max-width: 425px) {
    object-position: 25% 60%;
  }
`;

function Video() {
  let videoA = useRef(null);
  
  useEffect(() => {
    let tl = gsap.timeline();
  

    tl.from(
      videoA,
      {
        duration: 2,
        css: { height: "0%", opacity: 0 },
        ease: "power3.inOut",
        delay: 2,
      },
      "Start"
    );
    
  }, []);

  return (
    <div>
      <VideoBG
        className="videoTag"
        autoPlay
        loop
        muted
        ref={(el) => {
          videoA = el;
        }}
      >
        <source src={sample} type="video/mp4" />
      </VideoBG>
    </div>
  );
}

export default Video;
