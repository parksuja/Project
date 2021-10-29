import { Route } from "react-router";
import MainPage from "./pages/MainPage";
import React from "react";

function App() {
  return (
    <>
      <title>AI기반 온라인 홈트레이닝</title>
      {/* <Route component={HomePage} path={["/@:username", "/"]} exact /> */}
      <Route component={MainPage} path="/main" />
    </>
  );
}

export default App;
