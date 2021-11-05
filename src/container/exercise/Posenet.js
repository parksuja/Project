import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import * as bodyPix from "@tensorflow-models/body-pix";
import React, { useRef } from "react";
import * as posenet from "@tensorflow-models/posenet";
import { drawKeypoints, drawSkeleton } from "./utilities";
import ml5 from "ml5";
//1.Install dependencies
//2.Import  dependencies
//3.Setup webcam and canvas
//4 Define references to those
//5. Load bodypix
//6. Detect function
//7. Draw using drawMask
//8. Draw functions
//사전에 훈련된 모델을 활용 감지기능은 거의실시간 특정간격 반복
//실시간 웹캠 피드를 분할
function Posenet() {
  //4.Define references to those
  const webcamRef = useRef(null);
  const canvasRef = useRef(null); //참조

  //5.Load bodypix
  const runPosenet = async () => {
    const net = await posenet.load({
      //실행함수
      inputResolution: { width: 640, height: 480 },
      scale: 0.5,
    });
    setInterval(() => {
      detect(net);
    }, 10000);
  };
  //6.로드 표시할 수 있도록 감지기능 작성
  const detect = async (net) => {
    //check data is available
    if (
      typeof webcamRef.current !== "undefined" && //웹캠정의되지 않았는지 확인
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4 //웹캠참조 비디오와 준비상태 엑세스 확인
      //준비상태 4로설정 실제로 데이터 수신확인
    ) {
      //Get video properties
      const video = webcamRef.current.video;
      const videoHeight = webcamRef.current.video.videoWidth;
      const videoWidth = webcamRef.current.video.videoHeight;

      //Set video width and height
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      //Make detections
      const pose = await net.estimateSinglePose(video); //실제 감지를 수행코드
      //실제로 이동하여 서로 다른 감지를 얻기 위해 세그먼트 사람 부분 방법사용
      console.log(pose);

      drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
    }
  };

  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    drawKeypoints(pose["keypoints"], 0.5, ctx);
    drawSkeleton(pose["keypoints"], 0.5, ctx);
  };

  runPosenet();

  return (
    <>
      <Webcam
        ref={webcamRef}
        style={{
          position: "absolute",
          marginLeft: "150px",
          marginRight: "auto",
          left: 0,
          textAlign: "center",
          zIndex: 9,
          width: 700,
          height: 500,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "relative",
          marginLeft: "150px",
          marginRight: "auto",
          left: 0,
          textAlign: "center",
          zIndex: 9,
          width: 700,
          height: 500,
        }}
      />
    </>
  );
}

export default Posenet;
