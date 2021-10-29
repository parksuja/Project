import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Health5 from "../../img/Health5.png";
import Health6 from "../../img/Health6.png";
import Health7 from "../../img/Health7.png";
import Health8 from "../../img/Health8.png";
import "./MainPhoto.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//carousel 적용

const Wrap = styled.div`
  position: relative;
`;

const Text = styled.div`
    position: absolute;
    left : 50%;
    transform:translateX(-50%);
    margin-left : 15px;
    top: 80%;
    border 4px solid white;
    @media (max-width: 768px) {
        border 3.5px solid white;
        margin-left : 0px;
    }
`;
const H = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: white;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;
const LinkTo = styled(Link)`
  color: white;
  text-decoration: none;
`;
class MainPhoto extends React.Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      centerPadding: "100px",
      autoplay: true,
      autoplaySpeed: 3500,
      useCss: true,
    };
    return (
      <>
        <div>
          <Fade cascade>
            <Slider {...settings}>
              <Wrap>
                <img src={Health5} width="100%" height="600px"></img>
                <Text>
                  <H>
                    <LinkTo to="/todaytr">강의보기</LinkTo>
                  </H>
                </Text>
              </Wrap>
              <Wrap>
                <img src={Health6} width="100%" height="600px"></img>
                <Text>
                  <H>
                    <LinkTo to="/todaytr">강의보기</LinkTo>
                  </H>
                </Text>
              </Wrap>
              <Wrap>
                <img src={Health7} width="100%" height="600px"></img>
                <Text>
                  <H>
                    <LinkTo to="/todaytr">강의보기</LinkTo>
                  </H>
                </Text>
              </Wrap>
              <Wrap>
                <img src={Health8} width="100%" height="600px"></img>
                <Text>
                  <H>
                    <LinkTo to="/todaytr">강의보기</LinkTo>
                  </H>
                </Text>
              </Wrap>
            </Slider>
          </Fade>
        </div>
      </>
    );
  }
}

export default MainPhoto;
