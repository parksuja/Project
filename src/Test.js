import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import * as bodyPix from "@tensorflow-models/body-pix";
import * as posenet from "@tensorflow-models/posenet";

import * as tf from "@tensorflow/tfjs";
import * as tmPose from "@teachablemachine/pose";

import {
  drawKeypoints,
  drawSkeleton,
} from "../src/container/exercise/utilities";
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

const URL = "./model/";
let model, webcam, ctx, labelContainer, maxPredictions;

async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  // load the model and metadata
  // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
  // Note: the pose library adds a tmPose object to your window (window.tmPose)
  model = await tmPose.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  // Convenience function to setup a webcam
  const size = 700;
  const flip = true; // whether to flip the webcam
  webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
  await webcam.setup(); // request access to the webcam
  await webcam.play();
  window.requestAnimationFrame(loop);

  // append/get elements to the DOM
  const canvas = document.getElementById("canvas");
  canvas.width = size;
  canvas.height = size;
  ctx = canvas.getContext("2d");
  labelContainer = document.getElementById("label-container");
  for (let i = 0; i < maxPredictions; i++) {
    // and class labels
    labelContainer.appendChild(document.createElement("div"));
  }
}

async function loop(timestamp) {
  webcam.update(); // update the webcam frame
  await predict();
  window.requestAnimationFrame(loop);
}

async function predict() {
  // Prediction #1: run input through posenet
  // estimatePose can take in an image, video or canvas html element
  const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
  // Prediction 2: run input through teachable machine classification model
  const prediction = await model.predict(posenetOutput);

  for (let i = 0; i < maxPredictions; i++) {
    const classPrediction =
      prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    labelContainer.childNodes[i].innerHTML = classPrediction;
  }

  // finally draw the poses
  drawPose(pose);
}
function drawPose(pose) {
  if (webcam.canvas) {
    ctx.drawImage(webcam.canvas, 0, 0);
    // draw the keypoints and skeleton
    if (pose) {
      const minPartConfidence = 0.5;
      tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
      tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
    }
  }
}

function Test() {
  return (
    <>
      <div>홈트레이닝 시작</div>
      <button type="button" onClick={() => init()}>
        누르면 시작합니다.
      </button>
      {/* <button onClick={() => toggle()}>{start ? "Stop" : "Start"}</button> */}
      <div>
        <canvas id="canvas"></canvas>
      </div>
      <div id="label-container"></div>
    </>
  );
}

export default Test;
