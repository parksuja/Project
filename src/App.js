import { Route } from "react-router";
import MainPage from "./pages/MainPage";
import React from "react";
import TodayTr from "./pages/Todaytr";
import { Helmet } from "react-helmet-async";
import Detail from "./components/common/Detail";
import Test from "./Test";

//React에서 웹사이트 타이틀(탭 이름)을 동적으로 변경할 수 있게 해준다.
//index.js에서 지정
function App() {
  return (
    <>
      <Helmet>
        <title>메인</title>
      </Helmet>
      <Route component={MainPage} path="/main" />
      <Route component={TodayTr} path="/todaytr" />
      <Route component={Detail} path="/Detail" />
      <Route component={Test} path="/Test" />
    </>
  );
}

export default App;
