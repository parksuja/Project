import React from "react";
// import HeaderContainer from "../containers/common/HeaderContainer";
import NavContainer from "../components/common/NavContainer";
import { Helmet } from "react-helmet-async";
import FooterContainer from "../components/common/FooterContainer";
import styled from "styled-components";
import ExerciseContainer from "../container/exercise/ExerciseContainer";

const Background = styled.div`
  background: linear-gradient(120deg, #d8e2ed 50%, #f5f5f5 50%);
`;
//120deg 기울기?
// 0deg는 위에서 아래로 CSS 선형 그라디언트를 생성합니다.
//linear-gradient(to right, red, orange, yellow, green, blue, indigo, purple);
//오른쪽 120deg, 색상 #d8e2ed
//선형 그래디언트(linear-gradient)
// 둘 이상의 색 사이의 색상 표현을 부드럽게 전환해주는 효과를 의미합니다.

//react-helmet-async에서는 더 깊숙한 곳에 위치한 Helmet이 우선권을 차지합니다.
// 예를 들어 App과 WritePage에서 Helmet을 사용할 경우,
//WritePage는 App 내부에 들어 있기 때문에 WritePage에서 설정하는 title 값이 나타납니다.

const TodayTr = () => {
  return (
    <>
      <Helmet>
        <title>홈트레이닝</title>
      </Helmet>
      <Background>
        <NavContainer />
        <ExerciseContainer />
        <FooterContainer />
      </Background>
    </>
  );
};

export default TodayTr;
