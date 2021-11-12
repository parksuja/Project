import { Route } from "react-router";
import MainPage from "./pages/MainPage";
import React from "react";
import TodayTr from "./pages/Todaytr";
import { Helmet } from "react-helmet-async";
import Detail from "./components/common/Detail";
import Test from "./Test";
import updateForm from "./CRUD/UpdateForm";
import saveForm from "./CRUD/SaveForm";
import joinForm from "./CRUD/JoinForm";
import deleteForm from "./CRUD/BookDetail";
import loginForm from "./CRUD/Update";
import UpdateForm from "./CRUD/UpdateForm";
import SaveForm from "./CRUD/SaveForm";
import DeleteForm from "./CRUD/BookDetail";
import LoginForm from "./CRUD/Update";
import JoinForm from "./CRUD/JoinForm";
import BookDetail from "./CRUD/BookDetail";
import Update from "./CRUD/Update";
import Detail1 from "./components/common/Detail1";

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
      <Route component={Test} path="/Test" />
      <Route component={Detail} path="/Detail" />
      <Route component={Detail1} path="/Detail1" />
      <Route component={UpdateForm} path="/UpdateForm/" />
      <Route component={SaveForm} path="/SaveForm/" />
      <Route component={BookDetail} path="/Book/:id" />
      <Route component={Update} path="/Update/:id" />
      <Route component={JoinForm} path="/JoinForm" />
    </>
  );
}

export default App;
