import React from "react";
// import HeaderContainer from "../container/commons/HeaderContainer";
import FooterContainer from "../components/common/FooterContainer";
import NavContainer from "../components/common/NavContainer";
import Main from "../components/common/Main";
import GoTop from "../components/GoToTop/GoTop";
function MainPage() {
  return (
    <>
      {/* <HeaderContainer /> */}
      <NavContainer />
      <Main />
      <FooterContainer />
      <GoTop />
    </>
  );
}
export default MainPage;
