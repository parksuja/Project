import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/common/Header";
import { logout } from "../../modules/user";

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  //리덕스 상태를 조회해서 사용 할 때 최적화를 하기 위해서 리덕스 상태 바뀌지 x 리렌더링 x
  //connect 함수를 이용하지 않고 리덕스의 state를 조회할 수 있다.
  const dispatch = useDispatch();
  //생성한 action을 useDispatch를 통해 발생 시킬 수 있다.
  const onLogout = () => {
    dispatch(logout());
  };
  
  return (
    <>
      <Header user={user} onLogout={onLogout} />
    </>
  );
};

export default HeaderContainer;
