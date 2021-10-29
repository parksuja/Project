import React from "react";
import HeaderContainer from "../container/commons/HeaderContainer";
// import NavContainer from "../components/common/NavContainer";
import FooterContainer from "../components/common/FooterContainer";
import NavContainer from "../components/common/NavContainer";
import Main from "../components/common/Main";
// import Main from "../components/common/main";

function MainPage() {
  return (
    <>
      {/* <HeaderContainer /> */}
      <NavContainer />
      <Main />
      <FooterContainer />
    </>
  );
}
export default MainPage;
