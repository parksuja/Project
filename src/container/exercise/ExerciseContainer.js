import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";
import palette from "../../lib/style/palette";
// import Webcam from "react-webcam";
import { useRef } from "react";
// relative여기서 태그의 위치를 살짝 변경하고 싶을 때 position: relative를 사용합니다
import "./ExerciseContainer.css";

function ExerciseContainer() {
  return (
    <>
      <div>
        <video
          id="video"
          width="640"
          height="480"
          autoplay
          muted
          playsinline
        ></video>
        <canvas id="canvas"></canvas>
      </div>
    </>
  );
}

export default ExerciseContainer;
