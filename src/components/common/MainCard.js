import { ButtonGroup } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Health1 from "../../img/Health1.png";
import Health2 from "../../img/Health2.png";
import Health3 from "../../img/Health3.png";
import Health4 from "../../img/Health4.png";
import Button from "@mui/material/Button";
import styled from "styled-components";

const MainCard = () => {
  return (
    <>
      <div>
        <img src={Health1} />
        <p>
          하체운동의 대명사로 불리며 스쿼트와 쌍두마차를 이룰 만큼 효과가 좋은
          운동이다. <br />
          스쿼트가 근육 비대, 성기능 향상, 체력, 유연성 향상이 주된 운동 효과라
          하면 <br />
          런지는 운동 신경과 균형감각, 허리 건강, 코어 강화를 위한 운동으로
          알려져있다.
        </p>
        <Link to="/todaytr">
          <Button variant="contained">Contained</Button>
        </Link>
      </div>
      <div>
        <img src={Health2} />
        <p>
          하체운동의 대명사로 불리며 스쿼트와 쌍두마차를 이룰 만큼 효과가 좋은
          운동이다. <br />
          스쿼트가 근육 비대, 성기능 향상, 체력, 유연성 향상이 주된 운동 효과라
          하면 <br />
          런지는 운동 신경과 균형감각, 허리 건강, 코어 강화를 위한 운동으로
          알려져있다.
        </p>
        <Link to="/todaytr">
          <Button variant="contained">Contained</Button>
        </Link>
      </div>
      <div>
        <img src={Health3} />
        <p>
          하체운동의 대명사로 불리며 스쿼트와 쌍두마차를 이룰 만큼 효과가 좋은
          운동이다. <br />
          스쿼트가 근육 비대, 성기능 향상, 체력, 유연성 향상이 주된 운동 효과라
          하면 <br />
          런지는 운동 신경과 균형감각, 허리 건강, 코어 강화를 위한 운동으로
          알려져있다.
        </p>
        <Link to="/todaytr">
          <Button variant="contained">Contained</Button>
        </Link>
      </div>
      <div>
        <img src={Health4} />
        <p>
          하체운동의 대명사로 불리며 스쿼트와 쌍두마차를 이룰 만큼 효과가 좋은
          운동이다. <br />
          스쿼트가 근육 비대, 성기능 향상, 체력, 유연성 향상이 주된 운동 효과라
          하면 <br />
          런지는 운동 신경과 균형감각, 허리 건강, 코어 강화를 위한 운동으로
          알려져있다.
        </p>
        <Link to="/todaytr">
          <Button variant="contained">Contained</Button>
        </Link>
      </div>
    </>
  );
};

export default MainCard;
