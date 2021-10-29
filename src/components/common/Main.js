import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import Zoom from "react-reveal/Zoom";
import MainPhoto from "./MainPhoto";
import "./Main.css";
import MainAbout from "./MainAbout";
import MainCard from "./MainCard";

const Spacer1 = styled.div`
  height: 0.5rem;
`;

const Tutorial = styled(Responsive)`
  //다른 컴포넌트를 보여줘야할 경우 적용
  padding-top: 3%;
  h1 {
    font-size: 1.2rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.08);
  }
  span {
    font-size: 1rem;
  }
`;

//zoom 서서히 나타나는 애니메이션 효과
const Main = () => {
  return (
    <>
      <Spacer1 />
      <MainPhoto />
      <Tutorial>
        <Zoom right>
          <MainAbout />
        </Zoom>
        <Zoom left>
          <div>
            <MainCard />
          </div>
        </Zoom>
      </Tutorial>
      <Spacer1 />
    </>
  );
};

export default Main;
